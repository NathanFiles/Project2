import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { user } from 'src/app/model/user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userService: UserService) { }

  submitted = false;  //this triggers the 'Submitted!' response text
  users : user[] = [];

  getType(type) {
      if (type == 0) {
        return "User";
      }
      if (type == 1) {
        return "Moderator";
      }
      if (type == 2) {
        return "Administrator";
      }
  }

  changePermissions() {
    for (let i = 0; i < this.users.length; i++) {
      let nextSelection = (<HTMLInputElement>document.getElementById("" + i)).value;
      if (nextSelection != "" + this.users[i].type) {
        let updatedUser : user = this.users[i];
        updatedUser.type = parseInt(nextSelection, 10);
        this.userService.updateUser(updatedUser).subscribe(
          (response) => {
            this.submitted = true;
          },
          (response) => {
            console.log("Error.");
            console.log(response);
          }
        );
      }      
      // if (this.users[i].type != )
    }
  }

  ngOnInit() {

    this.userService.getAllUsers().subscribe(
      (response) => {
        console.log(response);
        this.users=response;
        
      },
      () => {
        console.log("No headers found");
      }
    );

  }

}
