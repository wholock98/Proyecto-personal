import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { INICIOComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { WilliamHartnellComponent } from './Doctores/william-hartnell/william-hartnell.component';
import { DavidTennantComponent } from './Doctores/david-tennant/david-tennant.component';
import { MattSmithComponent } from './Doctores/matt-smith/matt-smith.component';
import { PeterCapaldiComponent } from './Doctores/peter-capaldi/peter-capaldi.component';
import { EventosComponent } from './eventos/eventos.component';
import { AlicantardisIIComponent } from './eventos/alicantardis-ii/alicantardis-ii.component';


const routes: Routes = [
  {
    path:'',
    component:INICIOComponent
  },


  {
    path:'post/:variable',
    component:LoginComponent
  },

  {
    path: 'registro',
    component:RegistroComponent
  },

  {
    path:'william-hartnell',
    component: WilliamHartnellComponent
  },

  {
    path:'david-tennant',
    component: DavidTennantComponent
  },

  {
    path: 'matt-smith',
    component: MattSmithComponent
  },

  {
    path: 'peter-capaldi',
    component: PeterCapaldiComponent
  },

  {
    path:'eventos',
    component: EventosComponent
  },

  {
    path: 'alicantardis-II',
    component: AlicantardisIIComponent
  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }