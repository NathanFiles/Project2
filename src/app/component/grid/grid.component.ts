import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { post } from 'src/app/model/post';
import { ThreadService } from 'src/app/service/thread.service';
import { thread } from 'src/app/model/thread';
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
  loginclicked: boolean = false;
  loggedin: boolean = false;
  responseText = "";

  showLogin() {
    this.loginclicked = true; 

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

  

  activeheaders :post[] = [];

  ngOnInit() {
    this.postservice.getThreadHeaders().subscribe(
      (response) => {
        console.log(response);
        this.activeheaders=response;
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

    if (localStorage.getItem('responseText') === "Invalid credentials, please try again.") {  //This makes it so that "Invalid" message only appears the first time
      localStorage.setItem('responseText', "");
    }
    this.responseText = localStorage.getItem('responseText');



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
