import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { INICIOComponent } from './components/inicio/inicio.component';
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
import { JornadasDeJuegosComponent } from './components/jornadas-de-juegos/jornadas-de-juegos.component';
import { TarjetaEventosComponent } from './components/tarjeta-eventos/tarjeta-eventos.component';
import { TarjetasViajesComponent } from './components/tarjetas-viajes/tarjetas-viajes.component';
import { FooterComponent } from './components/footer/footer.component';


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
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'historia',
    component: HistoriaComponent
  },
  {
    path: 'EL-DOCTOR',
    component: ELDOCTORComponent
  },
  {
    path: 'tarjeta-evento',
    component: TarjetaEventosComponent
  },
  {
    path: 'tarjetas-Viajes',
    component: TarjetasViajesComponent
  },
  {
    path: 'Jornadas-juegos',
    component: JornadasDeJuegosComponent
  },
  {
    path:'footer',
    component: FooterComponent
  }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }