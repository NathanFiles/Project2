import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
  replies = []; 
  constructor() { 
    for (let index = 1; index < 50; index++) {
      this.replies.push("reply #" + index)
    }
    console.log(this.replies);
  }

  ngOnInit() {
    
  }
  

  

}
