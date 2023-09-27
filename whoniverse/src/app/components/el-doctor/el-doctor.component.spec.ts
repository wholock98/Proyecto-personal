import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELDOCTORComponent } from './el-doctor.component';

describe('ELDOCTORComponent', () => {
  let component: ELDOCTORComponent;
  let fixture: ComponentFixture<ELDOCTORComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ELDOCTORComponent]
    });
    fixture = TestBed.createComponent(ELDOCTORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
