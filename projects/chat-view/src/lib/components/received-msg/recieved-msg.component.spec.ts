import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedMessageComponent } from './received-msg.component';
import { ChatViewModule } from '../../chat-view.module';

describe('ReceivedMessageComponent', () => {
  let component: ReceivedMessageComponent;
  let fixture: ComponentFixture<ReceivedMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ChatViewModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
