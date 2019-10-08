import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { ThreadService } from 'src/app/service/thread.service';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
  
  constructor(private ps: PostService, private ts: ThreadService) {  }

  ngOnInit() {
    this.getReplies();

  }

  allReplies: Observable<post[]> = this.ps.getAllPosts();
  replies : post[] = []; 
  getReplies() {
    this.allReplies.subscribe(
      (response) => {
        this.replies = response;
        console.log(response);
      },
      (response) => {
        console.log("Failure");
      }
      
    );
  }

  loadReply(post) {
    console.log(post);
    this.ts.activepost = post;

  }

  

}
