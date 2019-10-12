import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  password1:string = "";
  password2:string = "";
  username:string = "";
  constructor(private userService : UserService) { }

  badPass: boolean = false; //this is true if the passwords don't match
  duplicateUser: boolean = false; //this is true when the registration fails (due to unique constraint on username)
  ngOnInit() {
  }

  registerNewUser(){
    if(this.password2 == this.password1){
      let newuser: user = {
        u_id: 0,
        username: this.username,
        password: this.password2,
        type: 0
      }
      console.log(newuser);
      this.userService.register(newuser).subscribe(
        (response) => {
          let activeUser = <user> response;
          localStorage.setItem('currentUser', JSON.stringify(activeUser));
          localStorage.setItem('responseText', "Welcome, " + activeUser.username + "!");
          window.location.href = 'grid';
        },
        (response) => {
          this.duplicateUser = true;
          this.badPass = false;
          console.log("registration failure");
        }
      );

    } else {
      this.badPass = true;
      this.duplicateUser = false;
    }
    console.log(this.password1);
    console.log(this.password2);
    console.log(this.username);


  }

}
