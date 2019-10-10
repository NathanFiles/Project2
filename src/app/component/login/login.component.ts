import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = "";
  password : string = "";
  user_id : string = "";
  data : any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  userLogin(){
    const fd = new FormData();
    fd.append("username", this.username);
    fd.append("password", this.password);

    this.http.post("http://localhost:8080/login", fd)
    .subscribe((data)=>{
      console.log(data);
    },
    (data) => {
      console.log(data);
    }
    );

    this.username = "";
    this.password = "";
  }

}
