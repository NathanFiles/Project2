import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http :HttpClient) { }


  host :string = "http://ec2-3-19-227-34.us-east-2.compute.amazonaws.com:8080/";
  // host :string = "http://localhost:8080";

  getAllUsers() :Observable<user[]> {
    return this.http.get<user[]>(this.host+"/users");
  }

  updateUser(userVar: user) {
    return this.http.put<user>(this.host+"/users", userVar, {headers: this.headers});
  }

  login(usernameIn: string, passwordIn: string) : Observable<user> {
    let fd = new FormData();
    fd.append("username", usernameIn);
    fd.append("password", passwordIn);
    
    let obs = this.http.post<user>(this.host+"/user/login", fd);
    
    return obs;


  }

  register(userVar: user) : Observable<user> {
    return this.http.post<user>(this.host+"/user/register", userVar, {headers: this.headers});
  }

  logout() {
    let anonUser = {
      u_id: 0,  //make sure this is 0
      username: "Anonymous",
      password: "",
      type: 0
    };

    localStorage.setItem('currentUser', JSON.stringify(anonUser));
    localStorage.setItem('responseText', "");
    window.location.reload();
  }


}
