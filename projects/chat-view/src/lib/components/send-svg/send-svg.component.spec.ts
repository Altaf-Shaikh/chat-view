import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSVGImage } from './send-svg.component';

describe('SendSVGImage', () => {
  let component: SendSVGImage;
  let fixture: ComponentFixture<SendSVGImage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSVGImage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSVGImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
