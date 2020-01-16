import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentMessageComponent } from './sent-msg.component';
import { ChatViewModule } from '../../chat-view.module';

describe('SentMessageComponent', () => {
  let component: SentMessageComponent;
  let fixture: ComponentFixture<SentMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ChatViewModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
