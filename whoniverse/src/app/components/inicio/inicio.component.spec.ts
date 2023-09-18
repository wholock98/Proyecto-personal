import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INICIOComponent } from './inicio.component';

describe('INICIOComponent', () => {
  let component: INICIOComponent;
  let fixture: ComponentFixture<INICIOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [INICIOComponent]
    });
    fixture = TestBed.createComponent(INICIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
