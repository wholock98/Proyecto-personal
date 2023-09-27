import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlicantardisIIComponent } from './alicantardis-ii.component';

describe('AlicantardisIIComponent', () => {
  let component: AlicantardisIIComponent;
  let fixture: ComponentFixture<AlicantardisIIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlicantardisIIComponent]
    });
    fixture = TestBed.createComponent(AlicantardisIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
