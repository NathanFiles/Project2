import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetThreadService {
  thread1 = {
    id: 1,
    size: 1,
    active: true
  }

  thread2 = {
    id: 2,
    size: 1,
    active: true
  }

  thread3 = {
    id: 3,
    size: 1,
    active: true
  }

  post1 = {
    id: 123,
    thread: 1,
    parent: null,
    imageuri: 'https://i.imgur.com/bTlpaDe.png',
    text: 'My red thread',
    timestamp: "2019-10-04T08:00",
    username: "Anonymous"
  }
  
  post2 = {
    id: 111,
    thread: 2,
    parent: null,
    imageuri: 'https://i.imgur.com/2iwJVyc.png',
    text: 'My green thread',
    timestamp: "2019-10-04T08:00",
    username: "Anonymous"
  }

  post3 = {
    id: 113,
    thread: 3,
    parent: null,
    imageuri: 'https://i.imgur.com/9JTINof.png',
    text: 'My dead thread',
    timestamp: "2019-10-04T08:00",
    username: "Anonymous"
  }

  post4 = {
    id: 113,
    thread: 1,
    parent: 123,
    imageuri: 'https://i.imgur.com/9JTINof.png',
    text: 'My thread reply',
    timestamp: "2019-10-04T08:00",
    username: "Anonymous"
  }

  threads = [this.thread1, this.thread2, this.thread3];
  posts = [this.post1, this.post2, this.post3, this.post4];
  
  post = { 
          p_id: 1,
          t_id: 1,
          parent_id: null,
          image: "https://media.giphy.com/media/l3q2Z6S6n38zjPswo/giphy.gif",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          timestamp: "2019-10-04T08:00",
          username: "Anonymous"
      }
      
  constructor() { }

  activethread = {
    id: 0,
    thread: 0,
    parent: null,
    imageuri: '',
    text: '',
    timestamp: "",
    username: ""
  }

  getThread(param) {
    let threadnum = param.id;
  }
}
