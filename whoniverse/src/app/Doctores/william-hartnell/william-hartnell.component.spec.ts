import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilliamHartnellComponent } from './william-hartnell.component';

describe('WilliamHartnellComponent', () => {
  let component: WilliamHartnellComponent;
  let fixture: ComponentFixture<WilliamHartnellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WilliamHartnellComponent]
    });
    fixture = TestBed.createComponent(WilliamHartnellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
