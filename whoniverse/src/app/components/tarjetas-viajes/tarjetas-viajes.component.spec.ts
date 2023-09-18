import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasViajesComponent } from './tarjetas-viajes.component';

describe('TarjetasViajesComponent', () => {
  let component: TarjetasViajesComponent;
  let fixture: ComponentFixture<TarjetasViajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetasViajesComponent]
    });
    fixture = TestBed.createComponent(TarjetasViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
