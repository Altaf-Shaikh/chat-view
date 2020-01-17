import { Component } from '@angular/core';
import { ReceivedMessage, SentMessage, Message, IChatViewOptions } from 'chat-view'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  chatMessages: Message[] = []

  options: IChatViewOptions = {
    //Set background color and text color of SentMessage
    sentMessage: {  
      textColor: 'white',
      backgroundColor: '#b580d1',
    },

    //Set background color and text color of ReceivedMessage
    receivedMessage: {
      textColor: 'black',
      backgroundColor: '#b7c5eb',
    },

     //Set background color and text color of ChatHeader
    header: {
      textColor: 'white',
      backgroundColor: '#7d8496'
    },
     //Set border color, text color, max input length, send icon color and background color of input box
    inputBox: {
      borderColor: '#b580d1',
      textColor: 'black',
      maxLength: 50,
      sendIconColor: '#b580d1',
      backgroundColor: '#dadde6'
    },
    //Set text color, background color and border color of quick replies
    quickReplies: {
      textColor: 'white',
      backgroundColor: '#b580d1',
      borderColor: '#b580d1'
    },

    //Set background color of chatlist pane
    chatlistBackgroundColor: '#e9edf5',
  }

  ngOnInit() {
    //Add a received message with text and image
    this.chatMessages.push(new ReceivedMessage()
      .setText('Received Text and Image')
      .setImageUrl('https://placeimg.com/100/100/nature'))

    //Add a sent message with text and image
    this.chatMessages.push(new SentMessage()
      .setText('Sent Text')
      .setImageUrl('https://placeimg.com/500/200/nature'))

    //Add a received message with text, image and quick replies
    this.chatMessages.push(new ReceivedMessage()
      .setText('Received Text and Image and Quick Replies')
      .setImageUrl('https://placeimg.com/400/100/nature')
      .setQuickReplies(['Quick Reply 1', 'Quick Reply 2']))

    //Add a sent message with text
    this.chatMessages.push(new SentMessage()
      .setText('Quick Reply 1'))

    //Add a received message with text
    this.chatMessages.push(new ReceivedMessage()
      .setText('Received Text'))

    //Add a received message with text
    this.chatMessages.push(new ReceivedMessage()
      .setText('Received Text and Quick Replies')
      .setQuickReplies(['Quick Reply 1', 'Quick Reply 2']))

  }

  receiveMessage() {

     //Add a received message with text
    this.chatMessages.push(new ReceivedMessage()
    .setText('Received Text'))

    //Add a received message with text, image and quick replies
    this.chatMessages.push(new ReceivedMessage()
      .setText('Text Image and Quick Replies')
      .setImageUrl('https://placeimg.com/400/300/nature')
      .setQuickReplies(['Quick Reply 1', 'Quick Reply 2'])
    )
  }
  sendMessage() {
    //Add a sent message with text
    this.chatMessages.push(new SentMessage()
    .setText('Sent Text'))

  }


  /**
   * Add a sent message when 'onOptionClicked' event is received from chat-view component
   * @param {*} option
   * @memberof AppComponent
   */
  optionClicked(option) {
    this.chatMessages.push(new SentMessage()
    .setText(option))
  }

  /**
   * Add a sent message when 'onInput' event is received from chat-view component
   * @param {*} inputText
   * @memberof AppComponent
   */
  inputSubmitted(inputText) {
    this.chatMessages.push(new SentMessage()
    .setText(inputText))
  }
}
