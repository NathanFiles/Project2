import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { post } from 'src/app/model/post';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private postservice :PostService, private userService: UserService) { }
  
  threadformon: boolean = false;
  loginclicked: boolean = false;
  loggedin: boolean = false;
  responseText = "";

  showLogin() {
    this.loginclicked = true; 
    document.getElementById("login-btn").remove();

  }

  openThreadForm() { 
    if (this.threadformon) {
      this.threadformon=false;
    } else {
      this.threadformon=true;
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

    if (localStorage.getItem('responseText') === "Invalid credentials, please try again.") {  //This makes it so that "Invalid" message only appears the first time
      localStorage.setItem('responseText', "");
    }
    this.responseText = localStorage.getItem('responseText');



  }


}
