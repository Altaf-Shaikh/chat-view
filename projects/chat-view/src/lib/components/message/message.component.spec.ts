import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { ChatViewModule } from '../../chat-view.module';
import { SentMessage, ReceivedMessage } from '../message-data/message-data';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ChatViewModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    component.message=new SentMessage().setText('test message')
    fixture.detectChanges();
  });

  it('should create for sent message', () => {
    component.ngOnInit()
   expect(component).toBeTruthy()
   expect(component.isRecivedMessage).toBeFalsy()
   expect(component.image).toBeUndefined()
   expect(component.quickReplies.length).toEqual(0)
  });

  it('should create for received message', () => {
    component.message=new ReceivedMessage().setText('test message').setImageUrl('https://testimage.jpg').setQuickReplies(['one','two'])
    component.ngOnInit()
    fixture.detectChanges();
    expect(component).toBeTruthy()
    expect(component.isRecivedMessage).toBeTruthy()
    expect(component.image).toEqual('https://testimage.jpg')
    expect(component.quickReplies.length).toEqual(2)
    expect(component.quickReplies).toEqual(['one','two'])
   });

  it('should send option clicked event',(done)=>{
    component.onOptionClicked.subscribe((optionText)=>{
      expect(optionText).toEqual('option text')
      done()
    })

    component.optionClicked('option text')
  })


});
