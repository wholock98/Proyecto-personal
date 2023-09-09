import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattSmithComponent } from './matt-smith.component';

describe('MattSmithComponent', () => {
  let component: MattSmithComponent;
  let fixture: ComponentFixture<MattSmithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MattSmithComponent]
    });
    fixture = TestBed.createComponent(MattSmithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
