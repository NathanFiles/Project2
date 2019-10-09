import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http :HttpClient) { }

  currentPicture: File = null;

  getAllPosts() : Observable<post[]> {
    return this.http.get<post[]>("http://localhost:8080/posts")
  }

  addPost(postVar: post) {
    const fd = new FormData();
    // fd.append()
    fd.append("username", postVar.username);
    if (this.currentPicture != null) {
      fd.append("file", this.currentPicture);
    // } else {

    }
    fd.append("text",postVar.text);
    fd.append("t_id", "" + postVar.t_id);
    fd.append("parent_id", "" + postVar.parent_id);
    fd.append("timeStamp", postVar.timestamp);
    // this.http.post("http://localhost:8080/posts/create", fd);


    return this.http.post("http://localhost:8080/posts/create", fd);
  }


}
