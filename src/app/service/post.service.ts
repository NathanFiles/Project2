import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http :HttpClient) { }

  getAllPosts() : Observable<post[]> {
    return this.http.get<post[]>("http://localhost:8080/posts")
  }

  addPost(postVar: post) : Observable<post> {
    return this.http.post<post>("http://localhost:8080/posts/create", postVar, {headers: this.headers});
  }


}
