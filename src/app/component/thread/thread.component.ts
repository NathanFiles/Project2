import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThreadService } from 'src/app/service/thread.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(private route :ActivatedRoute, private threadservice :ThreadService) { }
  ngOnInit() {
    this.route.params.subscribe( params =>  this.threadservice.getThread(params));
  }

}
