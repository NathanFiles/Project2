import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { ThreadService } from 'src/app/service/thread.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
  
  constructor(private postservice: PostService, private threadservice: ThreadService, private router :Router) {  }

  ngOnInit() {
  }

  allReplies: Observable<post[]> = this.postservice.getAllPosts();
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

  loadReply(reply :post) {
    this.router.navigateByUrl("/threads/"+reply.t_id+"/"+reply.p_id);
  }

  

}
