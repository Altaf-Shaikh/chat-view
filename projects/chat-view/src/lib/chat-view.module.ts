import { NgModule } from '@angular/core';
import { ChatViewComponent } from './chat-view.component';
import { ReceivedMessageComponent } from './components/received-msg/received-msg.component';
import { SentMessageComponent } from './components/sent-msg/sent-msg.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './components/message/message.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { ChatHeaderComponent } from './components/header/header.component';
import { SendSVGImage } from './components/send-svg/send-svg.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChatViewComponent,
    ReceivedMessageComponent,
    SentMessageComponent,
    MessageComponent,
    UserInputComponent,
    ChatHeaderComponent,
    SendSVGImage
  ],
  exports: [ChatViewComponent]
})
export class ChatViewModule { }
