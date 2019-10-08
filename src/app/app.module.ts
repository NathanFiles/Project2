import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './component/post/post.component';
import { RepliesComponent } from './component/replies/replies.component';
import { ThreadComponent } from './component/thread/thread.component';
import { GridComponent } from './component/grid/grid.component';
import { CreateReplyComponent } from './component/create-reply/create-reply.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    RepliesComponent,
    ThreadComponent,
    GridComponent,
    CreateReplyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
