import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

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

  
  post = {
    p_id: 1,
    t_id: 1,
    parent_id: null,
    image: "https://media.giphy.com/media/l3q2Z6S6n38zjPswo/giphy.gif",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    timestamp: "2019-10-04T08:00",
    username: "Anonymous"
  }

  
        
  makeThread() {
    let newThread = document.getElementById("thread-area");
    console.log("Making thread, what should be asked?");
    console.log(newThread);
    // newThread.insertAdjacentHTML('beforebegin', '<app-post></app-post>');
    // newThread.insertAdjacentHTML('afterend',`
    // <div class="box" id="leftbox">
    //   <div id="post">
    //       <p class="line" id="timestamp">${this.post.timestamp}</p>
    //       <p>#${this.post.p_id}</p>
    //       <h3 class="line">${this.post.username}</h3>
    //       <img src=${this.post.image} style="width: 95%;">
    //       <p></p>
    //   </div>
    // </div>
    // <div id="divider"></div>
    // <button id="replyButton" (click) = "addReply()"></button>
    // <div class="box" id="rightbox">
    //   <div id="replies">
    //       <div class="replybox" *ngFor="let post of replies">
    //           <img src=${this.post.image} id="image">    
    //           <h3 class="header">${this.post.username}</h3>
    //           <p class="header">${this.post.timestamp}</p>
    //           <p class="header">#${this.post.p_id}</p>
    //           <p id="text">${this.post.text}</p>
    //       </div>
    //   </div>
    // </div>`);
  }

  uploadImage() {
    console.log("I AM TOO DEFINED FOR YOU");
  }

}
