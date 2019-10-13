import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { post } from 'src/app/model/post';
import { thread } from 'src/app/model/thread';
import { ThreadService } from 'src/app/service/thread.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(private route :ActivatedRoute, private postservice :PostService, private threadservice: ThreadService, private router :Router) { }
  active : number = 1;
  ngOnInit() {
    this.route.params.subscribe( params =>  this.postservice.loadThread(params));
    this.postservice.observablePost.subscribe(newPost => {
      this.resetButton(newPost);
    })

    //get the current thread to see if it is inactive
    this.route.params.subscribe( 
        (params) =>  {
          this.threadservice.getThread(params.thread).subscribe(
            (response) => {
              this.active = response.active;
            }
          );
        }
    );
    

  }

  routeBack() {
    if (this.postservice.activepost.parent_id==0) {
      this.router.navigateByUrl("grid");
    } else {
      this.router.navigateByUrl("thread/"+this.postservice.activepost.t_id+"/"+this.postservice.activepost.parent_id);
    }
  }

  resetButton(newPost :post) {
    console.log(this.postservice.activepost.parent_id)
    let button = document.getElementById("button");
    if (newPost.parent_id==0) {
      button.setAttribute("src", "assets/img/homebutton.png")
    } else {
      button.setAttribute("src", "assets/img/backbutton.png")
    }
  }
}
