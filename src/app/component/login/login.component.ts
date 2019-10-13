import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { user } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = "";
  password:string = "";
  responseText = "";

  constructor(private userService : UserService) { }

  ngOnInit() {
    if (localStorage.getItem('responseText') === "Invalid credentials, please try again.") {  //This makes it so that "Invalid" message only appears the first time
      localStorage.setItem('responseText', "");
    }
    this.responseText = localStorage.getItem('responseText');
  }

  hideLogin() {
    this.userService.loginclicked = false;
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(
      (response) => {
        let currUser = <user> response;
        if (currUser != null && currUser != undefined && currUser.password === this.password) {
          localStorage.setItem('currentUser', JSON.stringify(currUser));
          window.location.reload();
          localStorage.setItem('responseText', "Welcome, " + currUser.username + "!");

        }
        else {
          localStorage.setItem('responseText', "Invalid credentials, please try again.");
          document.getElementById("response-text").innerHTML = "Invalid credentials, please try again.";
        }
      },
      (response) => {
        console.log(response);
        let currUser = <user> response;
        console.log(currUser);
        console.log("login failed");
      }
    );

  }

}
