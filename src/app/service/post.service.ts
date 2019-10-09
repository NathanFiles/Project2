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

  host :string = "http://ec2-18-218-37-90.us-east-2.compute.amazonaws.com:8080"

  getPost(p_id :number) :Observable<post> {
    return this.http.get<post>(this.host+"/posts/"+p_id);
  }

  getAllPosts() :Observable<post[]> {
    return this.http.get<post[]>(this.host+"/posts");
  }

  getThreadHeaders() :Observable<post[]> {
    return this.http.get<post[]>(this.host+"/posts/headers");
  }

  getReplies(p_id :number) :Observable<post[]> {
    return this.http.get<post[]>(this.host+"/posts/"+p_id+"/replies");
  }

  addPost(postVar: post) : Observable<post> {
    return this.http.post<post>(this.host+"/posts/create", postVar, {headers: this.headers});
  }

  activepost :post;
  activereplies :post[];

  loadThread(param) {
    this.getPost(param.p_id).subscribe(
      (response) => {
        console.log(response);
        this.activepost = response;
        this.loadReplies(this.activepost.p_id);
      },
      () => {
        console.log("Post not found");
      }
    )
  }

  loadReplies(p_id :number) {
    this.getReplies(p_id).subscribe(
      (response) => {
        console.log(response);
        this.activereplies = response;
      },
      () => {
        console.log("Replies not found");
      }
    )
  }
}
