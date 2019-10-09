import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThreadService } from 'src/app/service/thread.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  arrayofimg :string[] = ['https://i.imgur.com/bTlpaDe.png', 'https://i.imgur.com/2iwJVyc.png', 'https://i.imgur.com/9JTINof.png', 'https://media.giphy.com/media/l3q2Z6S6n38zjPswo/giphy.gif'];

  constructor(private router :Router, private threadservice :ThreadService) { }
  
  threadheaders = [];
  loadNewThread: boolean = false;

  newThread() {
    this.loadNewThread = true;
  }

  ngOnInit() {
    for (let i=0; i<this.threadservice.threads.length; i++) {
      if (this.threadservice.threads[i].active) {
        for (let j=0; j<this.threadservice.posts.length; j++) {
          if (this.threadservice.posts[j].t_id==this.threadservice.threads[i].id && this.threadservice.posts[j].parent_id==null) {
            this.threadheaders.push(this.threadservice.posts[j]);
          }
        }
      }
    }
  }
}
