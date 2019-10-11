import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreadService } from 'src/app/service/thread.service';
import { PostComponent } from '../post/post.component';
import { post } from 'src/app/model/post';
import { thread } from 'src/app/model/thread';
import { PostService } from 'src/app/service/post.service';
// import { ngModule } from 

@Component({
  selector: 'app-make-thread',
  templateUrl: './make-thread.component.html',
  styleUrls: ['./make-thread.component.css']
})
export class MakeThreadComponent implements OnInit {

  constructor(private route :ActivatedRoute, private threadservice :ThreadService, private postservice :PostService, private router :Router) { }

  ngOnInit() {
  }

  title: string;
  postText: string;

  newPost: post = null;
  newThread: thread = null;
  

  defaultPostText: string = "Say something...";

  onSelected(event){
    this.postservice.currentPicture = <File> event.target.files[0];
    let input = this.postservice.currentPicture;
    var reader :FileReader = new FileReader();
    reader.onload = function() {
      var dataURL = reader.result;
      var output = document.getElementById('postImage');
      output.setAttribute("src", <string> dataURL);
    };
    reader.readAsDataURL(input);
  }

  createThread() {
    console.log("pic:");
    // console.log(this.title);
    // console.log(this.postText);
    // console.log(this.imageUrl);

    this.newThread = {
      t_id : 0,
      num_posts : 1,
      active : 1
    };

    this.threadservice.addThread(this.newThread).subscribe(
      (response) => {
        console.log("response = " + response);
        this.newThread = <thread> response;
        console.log("this.newThread = " + this.newThread.toString());
        console.log("t_id = " + this.newThread.t_id);
        console.log("num_posts = " + this.newThread.num_posts);
        console.log("active = " + this.newThread.active);

        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        
        this.newPost = {
          p_id : 1,
          t_id : this.newThread.t_id,
          parent_id : 0,
          image : "",
          text : this.postText,
          timestamp : new Date().toDateString() + " " + time,
          username : JSON.parse(localStorage.getItem('currentUser')).username
        };

        this.postservice.addPost(this.newPost).subscribe(
          (response) => {
            this.newPost = <post> response;
            this.router.navigateByUrl("/thread/" + this.newPost.t_id + "/" + this.newPost.p_id);
          },
          (response) => {
            console.log(response);
            console.log(this.newPost);
            console.log("Something went wrong when adding post: " + this.newPost);
          }
        );
      },
      (response) => {
        console.log(response);
        console.log("Something didn't work when adding thread: " + this.newThread);
      }
    );


    
  }

  changeDefaultInput(id: string) {
    // let input = (<HTMLInputElement>document.getElementById("threadName"));
    console.log(id);
    let input = (<HTMLTextAreaElement>document.getElementById(id));
    input.value = "";
  }

  changeDefaultTextarea(id: string) {
    // let input = (<HTMLInputElement>document.getElementById("threadName"));
    console.log(id);
    let input = (<HTMLTextAreaElement>document.getElementById(id));
    input.textContent = "";
  }


  changeText(clearText: boolean) {
    // let input = (<HTMLInputElement>document.getElementById("threadName"));
    // console.log(id);
    let input = (<HTMLTextAreaElement>document.getElementById("postText"));
    if (clearText) {
      input.textContent = "";
    } else if (input.textContent === "") {
      input.textContent = this.defaultPostText;
    }
  }

}
