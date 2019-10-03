import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreadsComponent } from './component/threads/threads.component';
import { PostComponent } from './component/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
