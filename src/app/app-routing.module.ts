import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './component/grid/grid.component';
import { ThreadComponent } from './component/thread/thread.component';


const routes: Routes = [
  {path:'thread/:thread/:post',component:ThreadComponent},
  {path:'grid',component:GridComponent},
  {path:'',redirectTo:'grid',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
