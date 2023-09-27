import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavidTennantComponent } from './david-tennant.component';

describe('DavidTennantComponent', () => {
  let component: DavidTennantComponent;
  let fixture: ComponentFixture<DavidTennantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DavidTennantComponent]
    });
    fixture = TestBed.createComponent(DavidTennantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
