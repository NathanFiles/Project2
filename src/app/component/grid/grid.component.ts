import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  thread1 = {
    id: 1,
    size: 1,
    active: true
  }

  post1 = {
    id: 123,
    thread: 1,
    parent: null,
    imageuri: 'https://i.imgur.com/bTlpaDe.png',
    text: 'My red thread'
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

  post2 = {
    id: 111,
    thread: 2,
    parent: null,
    imageuri: 'https://i.imgur.com/2iwJVyc.png',
    text: 'My green thread'
  }

  post3 = {
    id: 113,
    thread: 3,
    parent: null,
    imageuri: 'https://i.imgur.com/9JTINof.png',
    text: 'My dead thread'
  }

  post4 = {
    id: 113,
    thread: 1,
    parent: 123,
    imageuri: 'https://i.imgur.com/9JTINof.png',
    text: 'My thread reply'
  }

  threads = [this.thread1, this.thread2, this.thread3];
  posts = [this.post1, this.post2, this.post3, this.post4];
  threadheaders = [];

  arrayofimg :string[] = ['https://i.imgur.com/bTlpaDe.png', 'https://i.imgur.com/2iwJVyc.png', 'https://i.imgur.com/9JTINof.png'];

  constructor() { }

  ngOnInit() {
    
    console.log("Begin");
    for (let i=0; i<this.threads.length; i++) {
      console.log(this.threads[i].active)
      if (this.threads[i].active) {
        for (let j=0; j<this.posts.length; j++) {
          console.log(this.posts[j].thread + " vs " + this.threads[i].id)
          if (this.posts[j].thread==this.threads[i].id && this.posts[j].parent==null) {
            console.log("Adding " + this.posts[j].text);
            this.threadheaders.push(this.posts[j]);
          }
        }
      }
    }
    console.log(this.threadheaders);
  
  }



}
