import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
  
  replies = []; 
  constructor() { 
    for (let index = 2; index < 50; index++) {
      this.replies.push({ p_id: index,
                          t_id: 1,
                          parent_id: 1,
                          image: "https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459__340.png",
                          text:
                          "This is an example of a reply. The character limit should be 500 characters. This text is exactly 500 characters. This is the limit for a post. This is an example of a reply. The character limit should be 500 characters. This text is exactly 500 characters. This is the limit for a post. This is an example of a reply. The character limit should be 500 characters. This text is exactly 500 characters. This is the limit for a post. This is an example of a reply. The character limit is 500 characters",
                          timestamp: "2019-10-04T08:00",
                          username: "Anonymous"
      })
    }
    console.log(this.replies);
  }

  ngOnInit() {
    
  }
  

  

}
