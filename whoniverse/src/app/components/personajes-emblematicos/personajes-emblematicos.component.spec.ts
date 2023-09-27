import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesEmblematicosComponent } from './personajes-emblematicos.component';

describe('PersonajesEmblematicosComponent', () => {
  let component: PersonajesEmblematicosComponent;
  let fixture: ComponentFixture<PersonajesEmblematicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajesEmblematicosComponent]
    });
    fixture = TestBed.createComponent(PersonajesEmblematicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
