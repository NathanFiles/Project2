import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { post } from 'src/app/model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  moderator :boolean = false;
  constructor(private router :Router, private postservice :PostService) { }

  removePost() {
    let currentPost : post = this.postservice.activepost;
    currentPost.image = "https://i.imgur.com/D1J0IxX.png";
    currentPost.text = "[removed]";
    console.log(currentPost);

    this.postservice.updatePost(currentPost).subscribe(
      (response) => {
        // window.location.reload();
      },
      (response) => {
        console.log("Error: could not remove post.");
        console.log(response);
      }
    );

  }

  ngOnInit() {
    let elements = document.getElementsByClassName("hidden");
    for (let i = 0; i < elements.length; i++) {
      elements[i].remove();
    }

    let activeUser = JSON.parse(localStorage.getItem('currentUser'));
    if (activeUser.type > 0) {  //moderator or admin spotted
      this.moderator = true;
    }

  }

  

}
