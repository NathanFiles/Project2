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


  title: string;
  postText: string;
  picture;


  newPost: post = null;
  newThread: thread = null;


  onSelected(event){
    this.postservice.currentPicture = <File> event.target.files[0];
  }

  addThread() {
    console.log("pic:");
    console.log(this.picture);



    // console.log(this.title);
    // console.log(this.postText);
    // console.log(this.imageUrl);

    this.newThread = {
      t_id : 9991,
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

        
        this.newPost = {
          p_id : 1,
          t_id : this.newThread.t_id,
          parent_id : 0,
          image : "",
          text : this.postText,
          timestamp : new Date().toDateString(),
          username : "Anonymous"
        };

        // parent_id, image, text, timestamp, username
        this.postservice.addPost(this.newPost).subscribe(
          (response) => {
            this.newPost = <post> response;
            // this.router.navigateByUrl("/threads/" + this.newPost.t_id + "/" + this.newPost.p_id);
            this.router.navigateByUrl("/threads/" + this.newPost.t_id);
          },
          (response) => {
            console.log()
            console.log(response);
            console.log(this.newPost);
            
            // console.log(this.newPost);
            // console.log(this.newPost);
            // console.log(this.newPost);
    
            console.log("Something went wrong when adding post: " + this.newPost);
          }
        );
      },
      (response) => {
        console.log(response);
        console.log("Something didn't work when adding thread: " + this.newThread);
      }
    );

    // const fd = new FormData();
    // fd.append("username", postVar.username);
    // fd.append("file", this.currentPicture);
    // fd.append("text",postVar.text);
    // fd.append("t_id", "" + postVar.t_id);
    // fd.append("parent_id", "" + postVar.parent_id);
    // fd.append("timeStamp", postVar.timestamp);
    // this.http.post("http://localhost:8080/posts/create", fd);
    
    // p_id : 1,
    // t_id : this.threadService.threadnum,
    // parent_id : this.threadService.activepost.p_id,
    // image : "",
    // text : this.replyText,
    // timestamp : new Date().toDateString(),
    // username : "Anonymous"

    
  }

  constructor(private route :ActivatedRoute, private threadservice :ThreadService, private postservice :PostService, private router :Router) { }
  // constructor(private postservice: GetPostService) { }

  ngOnInit() {
  }

  defaultPostText: string = "Say something...";

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

  // allPokemon: Observable<pokemon> = this.poke.getAllPokemon();

  // polkamans: Array<pokemon> = new Array<pokemon>();

  // showAllPokemon() {
  //   this.allPokemon.subscribe(
  //     //1. function to execute when the Observable receives information
  //     (response) => {
  //       console.log(response);
  //       // this.polkamans.push(response);
  //     },
  //     //2. function to execute when the Observable receives incorrect/faulty information
  //     (response) => {
  //       // console.log("Sorry it failed");
  //       return "Sorry it failed";
  //     }
  //     //3. optional function for what to do when the call is complete
  //     // () => {
  //     //   console.log("whatever");
  //     // }
  //   );
  // }



}
