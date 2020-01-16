import { Component, Input, OnInit } from '@angular/core';
import { IChatMessageOption } from '../../chat-view.component';
import { SentMessage } from '../message-data/message-data';


@Component({
    selector: 'sent-message',
    templateUrl: 'sent-msg.component.html',
    styleUrls:['./sent-msg.component.scss']
})

/**
 * SentMessageComponent class. This class wraps Message component for Sent Message
 * Inputs: SentMessage, sentMessageOptions
 * @export
 * @class SentMessageComponent
 * @implements {OnInit}
 */
export class SentMessageComponent implements OnInit {
    @Input('message') message:SentMessage;
    @Input('sentMessageOptions') sentMessageOptions:IChatMessageOption
    
    constructor() { }

    ngOnInit() { }
}