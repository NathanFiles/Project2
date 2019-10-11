import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  password1:string = "";
  password2:string = "";
  username:string = "";
  constructor() { }

  ngOnInit() {
  }

  registerNewUser(){
    if(this.password2 === this.password1){
      //call the user service to register.
    } else {
      // disply the message in the front *passwords don't match*
    }
    console.log(this.password1);
    console.log(this.password2);
    console.log(this.username);


  }

}
