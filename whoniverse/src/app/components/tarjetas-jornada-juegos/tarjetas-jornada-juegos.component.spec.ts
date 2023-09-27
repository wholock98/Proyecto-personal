import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasJornadaJuegosComponent } from './tarjetas-jornada-juegos.component';

describe('TarjetasJornadaJuegosComponent', () => {
  let component: TarjetasJornadaJuegosComponent;
  let fixture: ComponentFixture<TarjetasJornadaJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetasJornadaJuegosComponent]
    });
    fixture = TestBed.createComponent(TarjetasJornadaJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
