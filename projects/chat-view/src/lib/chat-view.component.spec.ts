import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatViewComponent } from './chat-view.component';
import { ChatViewModule } from './chat-view.module';
import { SentMessage } from './components/message-data/message-data';




describe('ChatViewComponent', () => {
  let component: ChatViewComponent;
  let fixture: ComponentFixture<ChatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChatViewModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule],
      declarations: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatViewComponent);
    component = fixture.componentInstance;
    spyOn(component,'scrollToBottom')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sent SendMessage event', (done) => {
    component.onInput.subscribe(sentText => {
      expect(sentText).toEqual('sent text');
      done();
    });
    component.sendMessage('sent text');
  })

  it('should sent OptionsClicked event', (done) => {
    component.onInput.subscribe(sentText => {
      expect(sentText).toEqual('sent text');
      done();
    });
    component.optionClicked('sent text');
  })

  // it('should scroll to bottom', (done) => {
   
  //   setTimeout(() => {
  //     expect(component.chatlist.nativeElement.scrollTop).toEqual(component.chatlist.nativeElement.scrollHeight)
  //     done()
  //   }, 100)

  //   component.scrollToBottom()
  // })

  it('should call scroll to bottom',()=>{
    component.messages.push(new SentMessage().setText('test'))
    component.ngDoCheck()
    expect(component.scrollToBottom).toHaveBeenCalled()
  })

  it('should NOT call scroll to bottom',()=>{
    component.messages.push(new SentMessage().setText('test'))
    component.oldMessages.push(new SentMessage().setText('test'))
    component.ngDoCheck()
    expect(component.scrollToBottom).not.toHaveBeenCalled()
  })


});
