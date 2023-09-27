import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { INICIOComponent } from './components/inicio/inicio.component';


import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { WilliamHartnellComponent } from './Doctores/william-hartnell/william-hartnell.component';
import { DavidTennantComponent } from './Doctores/david-tennant/david-tennant.component';
import { MattSmithComponent } from './Doctores/matt-smith/matt-smith.component';
import { PeterCapaldiComponent } from './Doctores/peter-capaldi/peter-capaldi.component';
import { EventosComponent } from './eventos/eventos.component';
import { AlicantardisIIComponent } from './eventos/alicantardis-ii/alicantardis-ii.component';
import { HeaderComponent } from './shared/header/header.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ELDOCTORComponent } from './components/el-doctor/el-doctor.component';
import { PersonajesEmblematicosComponent } from './components/personajes-emblematicos/personajes-emblematicos.component';
import { TarjetaEventosComponent } from './components/tarjeta-eventos/tarjeta-eventos.component';
import { TarjetasViajesComponent } from './components/tarjetas-viajes/tarjetas-viajes.component';
import { TarjetasJornadaJuegosComponent } from './components/tarjetas-jornada-juegos/tarjetas-jornada-juegos.component';
import { FooterComponent } from './components/footer/footer.component';
import { VortexVideoComponent } from './components/vortex-video/vortex-video.component';
import { CountdownComponent } from './components/countdown/countdown.component';






const rutas: Routes = [
  { path:'inicio', component: INICIOComponent },
  { path:'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'william-hartnell', component: WilliamHartnellComponent},
  { path: 'david-tennant', component: DavidTennantComponent},
  { path: 'matt-smith', component: MattSmithComponent},
  { path: 'peter-capaldi', component: PeterCapaldiComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'alicantardis-II', component: AlicantardisIIComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'historia', component: HistoriaComponent},
  { path: 'EL-DOCTOR', component: ELDOCTORComponent},
  { path: 'tajeta-Eventos', component: TarjetaEventosComponent},
  { path: 'tarjeta-Viajes', component: TarjetasViajesComponent},
  { path: 'tarjeta-Jornadas-juegos', component: TarjetasJornadaJuegosComponent},
  { path: 'vortex', component: VortexVideoComponent},
  { path: 'countdown', component: CountdownComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    INICIOComponent,
    LoginComponent,
    RegistroComponent,
    WilliamHartnellComponent,
    DavidTennantComponent,
    MattSmithComponent,
    PeterCapaldiComponent,
    EventosComponent,
    AlicantardisIIComponent,
    HeaderComponent,
    HistoriaComponent,
    ELDOCTORComponent,
    PersonajesEmblematicosComponent,
    TarjetaEventosComponent,
    TarjetasViajesComponent,
    TarjetasJornadaJuegosComponent,
    FooterComponent,
    VortexVideoComponent,
    CountdownComponent,
    

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



