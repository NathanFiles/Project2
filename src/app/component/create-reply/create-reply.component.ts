import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { PostService } from 'src/app/service/post.service';
import { ThreadService } from 'src/app/service/thread.service';
import { post } from 'src/app/model/post';


@Component({
  selector: 'app-create-reply',
  templateUrl: './create-reply.component.html',
  styleUrls: ['./create-reply.component.css']
})
export class CreateReplyComponent implements OnInit {

  replyPost : post = null;
  flag : boolean = false;
  date : string;
  t_id : string = "1";
  parent_id : string = "5";
  name : string;
  picture : File = null;
  replyText : string;
  timeStamp : string = "OCT 06, 2019";

  constructor(private http: HttpClient,private threadService : ThreadService,private replyService : PostService) { }

  ngOnInit() {
  }

    onSelected(event){
      this.replyService.currentPicture = <File> event.target.files[0];
    }
  
    postReply(){
      
      var today = new Date();
      //force everything to be formatted to two digits
      var hours = ("0" + today.getHours()).slice(-2);
      var minutes = ("0" + today.getMinutes()).slice(-2);
      var seconds = ("0" + today.getSeconds()).slice(-2);
      var time = hours + ":" + minutes + ":" + seconds;
      var textIn = " ";
        if (this.replyText != undefined && this.replyText != null) {
          textIn = this.replyText;
      }

      this.replyPost = {
        p_id : 999999,
        t_id : this.replyService.threadnum,
        parent_id : this.replyService.activepost.p_id,
        image : "",
        text : textIn,
        timestamp : today.toDateString() + " " + time,
        username : JSON.parse(localStorage.getItem('currentUser')).username

      };
      console.log(this.replyPost);

      this.replyService.addPost(this.replyPost).subscribe(
        (response) => {
          console.log(response);
          window.location.reload();
        },
        (response) => {
          console.log("Failed.");
          console.log(response);
        }
      );
      this.replyText = "";
      this.picture = null;
    }
}
