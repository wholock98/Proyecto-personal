import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { INICIOComponent } from './inicio/inicio.component';
import { MejoresMomentosComponent } from './mejores-momentos/mejores-momentos.component';


import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { WilliamHartnellComponent } from './Doctores/william-hartnell/william-hartnell.component';
import { DavidTennantComponent } from './Doctores/david-tennant/david-tennant.component';
import { MattSmithComponent } from './Doctores/matt-smith/matt-smith.component';
import { PeterCapaldiComponent } from './Doctores/peter-capaldi/peter-capaldi.component';
import { EventosComponent } from './eventos/eventos.component';
import { AlicantardisIIComponent } from './eventos/alicantardis-ii/alicantardis-ii.component';




const rutas: Routes = [
  { path:'inicio', component: INICIOComponent },
  { path:'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'william-hartnell', component: WilliamHartnellComponent},
  { path: 'david-tennant', component: DavidTennantComponent},
  { path: 'matt-smith', component: MattSmithComponent},
  { path: 'peter-capaldi', component: PeterCapaldiComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'alicantardis-II', component: AlicantardisIIComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    INICIOComponent,
    MejoresMomentosComponent,
    LoginComponent,
    RegistroComponent,
    WilliamHartnellComponent,
    DavidTennantComponent,
    MattSmithComponent,
    PeterCapaldiComponent,
    EventosComponent,
    AlicantardisIIComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



