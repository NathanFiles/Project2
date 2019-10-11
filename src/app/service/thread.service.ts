import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { thread } from '../model/thread';
import { post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  // threadnum = -1;

  // thread1 = {
  //   id: 1,
  //   size: 1,
  //   active: true
  // }

  // thread2 = {
  //   id: 2,
  //   size: 1,
  //   active: true
  // }

  // thread3 = {
  //   id: 3,
  //   size: 1,
  //   active: true
  // }

  // post1 : post = {
  //   p_id: 123,
  //   t_id: 1,
  //   parent_id: null,
  //   image: 'https://i.imgur.com/bTlpaDe.png',
  //   text: 'My red thread',
  //   timestamp: "2019-10-04T08:00",
  //   username: "Anonymous"
  // }
  
  // post2 : post = {
  //   p_id: 111,
  //   t_id: 2,
  //   parent_id: null,
  //   image: 'https://i.imgur.com/2iwJVyc.png',
  //   text: 'My green thread',
  //   timestamp: "2019-10-04T08:00",
  //   username: "Anonymous"
  // }

  // post3 : post = {
  //   p_id: 113,
  //   t_id: 3,
  //   parent_id: null,
  //   image: 'https://i.imgur.com/9JTINof.png',
  //   text: 'My dead thread',
  //   timestamp: "2019-10-04T08:00",
  //   username: "Anonymous"
  // }

  // post4 : post = {
  //   p_id: 113,
  //   t_id: 1,
  //   parent_id: 123,
  //   image: 'https://i.imgur.com/9JTINof.png',
  //   text: 'My thread reply',
  //   timestamp: "2019-10-04T08:00",
  //   username: "Anonymous"
  // }

  // threads = [this.thread1, this.thread2, this.thread3];
  // posts : post[] = [this.post1, this.post2, this.post3, this.post4];
  
  // activepost : post = null;

  // getThread(param) {
  //   this.threadnum = param.t_id;
  //   for (let i=0; i<this.threads.length; i++) {
  //     if (this.threads[i].id == this.threadnum && this.threads[i].active) {
  //       for (let j=0; j<this.posts.length; j++) {
  //         if (this.posts[j].t_id==this.threads[i].id && this.posts[j].parent_id==0) {
  //           console.log("HIT");
  //           this.activepost = this.posts[j];
  //         }
  //       }
  //     }
  //   }
  //   console.log("active post:");
  //   console.log(this.activepost); 
    
  // }
  
  constructor(private http :HttpClient) { }

  host :string = "http://ec2-18-218-37-90.us-east-2.compute.amazonaws.com:8080/";
  // host :string = "http://localhost:8080";

  allThreads() : Observable<thread[]> {
    return this.http.get<thread[]>(this.host+"/threads");
  }

  activeThreads() : Observable<thread[]> {
    return this.http.get<thread[]>(this.host+"/threads/active");
  }

  addThread(threadVar: thread) : Observable<thread> {
    return this.http.post<thread>(this.host+"/threads", threadVar, {headers: this.headers});
  }


}
