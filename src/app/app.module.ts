import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './component/post/post.component';
import { RepliesComponent } from './component/replies/replies.component';
import { ThreadComponent } from './component/thread/thread.component';
import { GridComponent } from './component/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    RepliesComponent,
    ThreadComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }