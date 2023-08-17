import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejoresMomentosComponent } from './mejores-momentos.component';

describe('MejoresMomentosComponent', () => {
  let component: MejoresMomentosComponent;
  let fixture: ComponentFixture<MejoresMomentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MejoresMomentosComponent]
    });
    fixture = TestBed.createComponent(MejoresMomentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
