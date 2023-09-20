import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VortexVideoComponent } from './vortex-video.component';

describe('VortexVideoComponent', () => {
  let component: VortexVideoComponent;
  let fixture: ComponentFixture<VortexVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VortexVideoComponent]
    });
    fixture = TestBed.createComponent(VortexVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
