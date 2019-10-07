import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetThreadService } from 'src/app/service/get-thread.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(private route :ActivatedRoute, private threadservice :GetThreadService) { }
  ngOnInit() {
    this.route.params.subscribe( params =>  this.threadservice.getThread(params));
  }

}
