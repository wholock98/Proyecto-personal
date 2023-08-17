import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { INICIOComponent } from './inicio/inicio.component';
import { MejoresMomentosComponent } from './mejores-momentos/mejores-momentos.component';


@NgModule({
  declarations: [
    AppComponent,
    INICIOComponent,
    MejoresMomentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
