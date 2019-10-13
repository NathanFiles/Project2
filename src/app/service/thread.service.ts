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
  
  constructor(private http :HttpClient) { }
  
  host :string = "http://ec2-3-19-227-34.us-east-2.compute.amazonaws.com:8080/";
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

  
  updateThread(threadVar: thread) : Observable<thread> {
    return this.http.put<thread>(this.host+"/threads", threadVar, {headers: this.headers});
  }
  
  deleteThread(threadVar: thread) : Observable<thread> {
    return this.http.delete<thread>(this.host+"/threads/"+threadVar.t_id);
  }

  getThread(t_id: number) : Observable<thread> {
    return this.http.get<thread>(this.host+"/threads/" + t_id);
  }
}
