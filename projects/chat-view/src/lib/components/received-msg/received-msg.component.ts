import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IChatMessageOption } from '../../chat-view.component';
import { ReceivedMessage } from '../message-data/message-data';


@Component({
    selector: 'received-message',
    templateUrl: 'received-msg.component.html',
    styleUrls: ['./received-msg.component.scss']
})

/**
 * ReceivedMessageComponent class. This class wraps Message component for Received Message
 * Inputs: ReceivedMessage, IChatMessageOption, quickRepliesOptions
 * Outpus: onOptionClicked Event
 * @export
 * @class ReceivedMessageComponent
 * @implements {OnInit}
 */
export class ReceivedMessageComponent implements OnInit {


    /**
     * ReceivedMessage data for ReceivedMessageComponent 
     * @type {ReceivedMessage}
     * @memberof ReceivedMessageComponent
     */
    @Input('message') message:ReceivedMessage;


    /**
     * @Optional
     * 
     * Set styling properties to received message component
     * This overrides default styling properties
     * @type {IChatMessageOption}
     * @memberof ReceivedMessageComponent
     */
    @Input('receivedMessageOptions') receivedMessageOptions:IChatMessageOption


    /**
     * @Optional
     * Set styling properties to Quick Replies
     * This overrides default styling properties
     *
     * @memberof ReceivedMessageComponent
     */
    @Input('quickRepliesOptions') quickRepliesOptions
 

    /**
     * Emit an event to Parent on quick replies option is clicked
     *
     * @memberof ReceivedMessageComponent
     */
    @Output('onOptionClicked') onOptionClicked =new EventEmitter()

   
    /**
     *Creates an instance of ReceivedMessageComponent.
     * @memberof ReceivedMessageComponent
     */
    constructor() { }


    /**
     * @memberof ReceivedMessageComponent
     */
    ngOnInit() {
    }


    /**
     * This function act as a transporter and sends the received event from Message Component to Parent component
     * @param {string} option
     * @memberof ReceivedMessageComponent
     */
    optionClicked(option){
        this.onOptionClicked.emit(option)
    }

}