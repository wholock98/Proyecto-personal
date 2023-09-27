import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadasDeJuegosComponent } from './jornadas-de-juegos.component';

describe('JornadasDeJuegosComponent', () => {
  let component: JornadasDeJuegosComponent;
  let fixture: ComponentFixture<JornadasDeJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JornadasDeJuegosComponent]
    });
    fixture = TestBed.createComponent(JornadasDeJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
