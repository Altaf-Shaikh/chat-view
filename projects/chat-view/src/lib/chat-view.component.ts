import { query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { messagePushAnimation } from './animations/animations';
import { ReceivedMessage, SentMessage } from './components/message-data/message-data';


@Component({
  selector: 'chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss'],
  animations: [
    trigger('messageAddedAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            useAnimation(messagePushAnimation, {
              params: {
                opacity: 1,
                translateY: 10,
                time: '0.2s'
              }
            })
          ]),
        ], { optional: true })
      ]),
    ]),
  ]
})

/**
 * This is only componet that needs to be added while integrating chat-view library.
 * Parent component of chat messages, chat header and chat input
 * Input : Array of ReceivedMessage and SentMessage
 * Input : IChatViewOptions : Set style properties of ReceivedMessage, SentMessage, header, chat input, quick replies
 * Output: onOptionClicked event emitter : Triggered when user clicks one of the quick replies
 * Output: onInput event emitter : Triggered when user clicks of send button
 * 
 * @export
 * @class ChatViewComponent
 * @implements {OnInit}
 */
export class ChatViewComponent {

  /**
   * ElementRef for chatlist to handle scrolling
   * @type {ElementRef}
   * @memberof ChatViewComponent
   */
  @ViewChild('chatlist', { static: false }) chatlist: ElementRef


  /**
   * Input messages (recieved or sent) array passed to component.
   * @type {(ReceivedMessage[] | SentMessage[])}
   * @memberof ChatViewComponent
   */
  @Input('messages') messages: (ReceivedMessage | SentMessage)[] = [];


  /**
   * Input property to set styling options to chat-view compoenents
   * @type {IChatViewOptions}
   * @memberof ChatViewComponent
   */
  @Input('options') options: IChatViewOptions = {
    //Set background color and text color of SentMessage
    sentMessage: {  
      textColor: 'white',
      backgroundColor: '#c7ac7b',
    },

    //Set background color and text color of ReceivedMessage
    receivedMessage: {
      textColor: 'black',
      backgroundColor: 'white',
    },

     //Set background color and text color of ChatHeader
    header: {
      textColor: 'white',
      backgroundColor: '#71a7de'
    },
     //Set border color, text color, max input length, send icon color and background color of input box
    inputBox: {
      borderColor: 'gray',
      textColor: 'black',
      maxLength: 50,
      sendIconColor: '#5e8dbd',
      backgroundColor: '#e1faf8'
    },
    //Set text color, background color and border color of quick replies
    quickReplies: {
      textColor: 'white',
      backgroundColor: '#c7ac7b',
      borderColor: '#c7ac7b'
    },

    //Set background color of chatlist pane
    chatlistBackgroundColor: '#e1faf8',
  }


  /**
   * Event emitter for quick replies are clicked
   * @memberof ChatViewComponent
   */
  @Output('onOptionClicked') onOptionClicked = new EventEmitter()


  /**
   * Event emitter when send button is clicked
   * @memberof ChatViewComponent
   */
  @Output('onInput') onInput = new EventEmitter()

  //messages array to keep track of previous messages.
  //This is used in ngDoCheck() top scroll chatview if new message is added.
  oldMessages = []

  constructor() {
  }

  /**
   * Event emitter when send button is clicked.
   * Parent copmponent will recived users query. Then it can be added in sent message array.
   * @param {*} text
   * @memberof ChatViewComponent
   */
  sendMessage(text) {
    this.onInput.emit(text)
  }

  /**
   * Event emitter when quick replies are clicked.
   * Parent copmponent will recived selected option. Then it can be added in sent message array.
   * @param {*} text
   * @memberof ChatViewComponent
   */
  optionClicked(option) {
    this.onInput.emit(option)
  }


  /**
   * To scroll chatlist to the bottom
   * @memberof ChatViewComponent
   */
   scrollToBottom() {
    setTimeout(() => {
      this.chatlist.nativeElement.scrollTop = this.chatlist.nativeElement.scrollHeight
    }, 0)
  }


  /**
   * After every change detection cycle, check if new message is added in message array.
   * If yes, then scroll chat list to bottom.
   * @memberof ChatViewComponent
   */
  ngDoCheck() {
    if (this.messages && this.messages.length != this.oldMessages.length) {
      this.scrollToBottom()
    }

    this.oldMessages = [...this.messages]
  }

}

/**
 * @export
 * @interface IChatViewOptions
 */
export interface IChatViewOptions {
  sentMessage?: IChatMessageOption,
  receivedMessage?: IChatMessageOption,
  header?: IChatMessageOption,
  inputBox?: {
    borderColor: string,
    textColor: string,
    maxLength?: number,
    sendIconColor: string,
    backgroundColor: string
  },
  quickReplies?: {
    textColor?: string,
    backgroundColor?: string,
    borderColor?: string
  },
  chatlistBackgroundColor: string,

}

/**
 *
 * @export
 * @interface IChatMessageOption
 */
export interface IChatMessageOption {
  textColor?: string,
  backgroundColor?: string,
}