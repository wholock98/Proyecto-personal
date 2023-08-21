import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { INICIOComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path:'',
    component:INICIOComponent
  },


  {
    path:'post/:variable',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }