import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { post } from 'src/app/model/post';
import { ThreadService } from 'src/app/service/thread.service';
import { thread } from 'src/app/model/thread';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private postservice :PostService, private threadservice: ThreadService, private userService: UserService) { }
  moderator: boolean = false;
  admin: boolean = false;
  threadformon: boolean = false;
  // loginclicked: boolean = false;
  loggedin: boolean = false;

  timeLimitInMinutes = 5;  //the amount of minutes before a thread is inactive

  showLogin() {
    this.userService.loginclicked = true; 

  }

  openThreadForm() { 
    if (this.threadformon) {
      this.threadformon=false;
    } else {
      this.threadformon=true;
    }
  }

  charLimit(threadText) {
    if (threadText.length > 40) {
      return threadText.substring(0,37) + "...";
    }
    else {
      return threadText;
    }
  }


  lockThread(t_id: number) {
    this.threadservice.getThread(t_id).subscribe(
      (response) => {
        let currThread: thread = response;
        currThread.active = 0;
        this.threadservice.updateThread(currThread).subscribe(
          (resp) => {
            console.log(currThread);
          }
        )
      }
    )
  }
  

  activeheaders :post[] = [];

  ngOnInit() {
    this.postservice.getThreadHeaders().subscribe(
      (response) => {
        console.log(response);
        this.activeheaders=response;
        //BEGIN DECAY THREAD CHECK
        let replies :post[] = [];
        let today = new Date();
        for (let i = 0; i < this.activeheaders.length; i++) {
          let p_id = this.activeheaders[i].p_id;
          this.postservice.getReplies(p_id).subscribe(
            (response) => {
              replies = response;
              let timestamp = undefined;
              if (replies[0] != undefined) {
                timestamp = replies[0].timestamp;
              }
              else {
                timestamp = this.activeheaders[i].timestamp;
              }
              let monthString = timestamp.substring(4,7);
              let month = new Date(Date.parse(monthString +" 1, 0000")).getMonth(); //this turns the month into a number
              let day = parseInt(timestamp.substring(8,10));
              let year = parseInt(timestamp.substring(11,15));
              let fulltime = timestamp.substring(timestamp.length - 8);
              let times = fulltime.split(":",3);

              let postDate = new Date(year, month, day, parseInt(times[0]), parseInt(times[1]), parseInt(times[2]), 0);
              var differenceInMinutes = (today.getTime() - postDate.getTime()) / 60000;
              if (differenceInMinutes > this.timeLimitInMinutes) {
                this.lockThread(this.activeheaders[i].t_id);
              }
            },
            () => {
              console.log("Replies not found");
            }
          )          
        }
        //END DECAY THREAD CHECK

      },
      () => {
        console.log("No headers found");
      }
    );


    let activeUser = JSON.parse(localStorage.getItem('currentUser'));
    if (activeUser == null) {
      activeUser = {
        u_id: 0,  //make sure this is 0
        username: "Anonymous",
        password: "",
        type: 0
      };
      localStorage.setItem('currentUser', JSON.stringify(activeUser));
    }
  
    if (activeUser.u_id != 0) {
      this.loggedin = true;
    }
    if (activeUser.type > 0) {  //moderator or admin spotted
      this.moderator = true;
    }
    if (activeUser.type == 2) {
      this.admin = true;
    } 

    



  }

  deleteThread(postIn) {
    let threadIn : thread = {
      t_id: postIn.t_id,  //only the t_id matters
      num_posts: 0,
      active: 0
    }
    this.threadservice.deleteThread(threadIn).subscribe(
      (response) => {
        window.location.reload();
      },
      (response) => {
        console.log("Error: could not delete thread.");
        console.log(response);
      }
    );

  }


}
