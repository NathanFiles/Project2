import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { PostService } from 'src/app/service/post.service';
import {post} from 'src/app/model/post';
import { ThreadService } from 'src/app/service/thread.service';
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
  constructor(private http: HttpClient, private threadService : ThreadService,private replyService : PostService) { }
  ngOnInit() {
  }
    onSelected(event){
      this.replyService.currentPicture = <File> event.target.files[0];

    }
  

    postReply(){
      
      this.replyPost = {
        p_id : 1,
        t_id : this.threadService.threadnum,
        parent_id : this.threadService.activepost.p_id,
        image : "",
        text : this.replyText,
        timestamp : new Date().toDateString(),
        username : "Anonymous"
      };

      this.replyService.addPost(this.replyPost).subscribe(
        (response) => {
          console.log(response);
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