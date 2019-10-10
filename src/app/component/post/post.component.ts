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
  
  constructor(private router :Router, private postservice :PostService) { }
  ngOnInit() {
    let elements = document.getElementsByClassName("hidden");
    for (let i = 0; i < elements.length; i++) {
      elements[i].remove();
    }
  }

  

}
