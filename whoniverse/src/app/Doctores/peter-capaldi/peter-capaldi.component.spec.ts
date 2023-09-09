import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeterCapaldiComponent } from './peter-capaldi.component';

describe('PeterCapaldiComponent', () => {
  let component: PeterCapaldiComponent;
  let fixture: ComponentFixture<PeterCapaldiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeterCapaldiComponent]
    });
    fixture = TestBed.createComponent(PeterCapaldiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
