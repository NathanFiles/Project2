import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  
  activepost :post = {
    p_id: 0,
    t_id: 0,
    parent_id: 0,
    timestamp: "",
    username: "",
    image: "",
    text: ""

  };
  activereplies :post[];

  observablePost;
  
  constructor(private http :HttpClient) {
    this.observablePost = new BehaviorSubject<post>(this.activepost);
  }

  eventChange() {
    this.observablePost.next(this.activepost);
  }

  threadnum = -1;
  host :string = "http://ec2-3-19-227-34.us-east-2.compute.amazonaws.com:8080/";
  // host :string = "http://localhost:8080";

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

  addSimplePost(postVar: post) : Observable<post> {
    return this.http.post<post>(this.host+"/posts", postVar, {headers: this.headers});
  }
  
  currentPicture: File = null;

  addPost(postVar: post) {
    const fd = new FormData();
    fd.append("username", postVar.username);
    fd.append("file", this.currentPicture);
    fd.append("text",postVar.text);
    fd.append("t_id", "" + postVar.t_id);
    fd.append("parent_id", "" + postVar.parent_id);
    fd.append("timeStamp", postVar.timestamp);
    this.http.post(this.host+"/posts/create", fd);

    let obs = this.http.post(this.host+"/posts/create", fd);
    this.currentPicture = null;
    return obs;
  }
  
  updatePost(postVar: post) {
    return this.http.put<post>(this.host+"/posts", postVar, {headers: this.headers});
  }

  deletePost(postVar: post) {
    return this.http.delete<post>(this.host+"/posts/"+postVar.p_id);
  }

  loadThread(param) {

    this.threadnum = param.thread;
    this.getPost(param.post).subscribe(
      (response) => {
        console.log(response);
        this.activepost = response;
        this.eventChange();
        console.log(this.activepost);

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
        // console.log(response);
        this.activereplies = response;
      },
      () => {
        console.log("Replies not found");
      }
    )
  }
}
