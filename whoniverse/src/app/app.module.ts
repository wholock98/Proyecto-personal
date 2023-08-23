import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { INICIOComponent } from './inicio/inicio.component';
import { MejoresMomentosComponent } from './mejores-momentos/mejores-momentos.component';


import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';




const rutas: Routes = [
  { path:'inicio', component: INICIOComponent },
  { path:'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
 
];

@NgModule({
  declarations: [
    AppComponent,
    INICIOComponent,
    MejoresMomentosComponent,
    LoginComponent,
    RegistroComponent,
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



