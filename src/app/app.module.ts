import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './app/modules/threads/components/components.component';
import { ThreadsComponent } from './components/threads/threads.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
