import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './component/grid/grid.component';
import { ThreadComponent } from './component/thread/thread.component';
import { RegisterComponent } from './component/register/register.component';
import { UserlistComponent } from './component/userlist/userlist.component'


const routes: Routes = [
  {path:'thread/:thread/:post',component:ThreadComponent},
  {path:'grid',component:GridComponent},
  {path:'register',component:RegisterComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'',redirectTo:'grid',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
