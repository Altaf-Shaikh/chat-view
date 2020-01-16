import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IChatMessageOption } from '../../chat-view.component';
import { Message, MESSAGE_CATEGORY, ReceivedMessage } from '../message-data/message-data';
@Component({
    selector: 'message',
    templateUrl: 'message.component.html',
    styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {

    /**
     * Input property to set chat message details. 
     * @type {Message}
     * @memberof MessageComponent
     */
    @Input('data') message: Message;
    

    /**
     * Input property to set css styling properties received message. 
     * @type {IChatMessageOption}
     * @memberof MessageComponent
     */
    @Input('receivedMessageOptions') receivedMessageOptions:IChatMessageOption


    /**
     * Input property to set css styling properties sent message. 
     * @type {IChatMessageOption}
     * @memberof MessageComponent
     */
    @Input('sentMessageOptions') sentMessageOptions:IChatMessageOption


    /**
     * Input property to set css styling properties quick replies. 
     * @memberof MessageComponent
     */
    @Input('quickRepliesOptions') quickRepliesOptions
    

    /**
     * Output property which will emit an event on quick reply option is clicked.
     * @memberof MessageComponent
     */
    @Output('onOptionClicked') onOptionClicked = new EventEmitter()


    /**
     * HostBinding to show shadow behind chat message on hover.
     * @memberof MessageComponent
     */
    @HostBinding('style.boxShadow') boxShadow;

    isRecivedMessage = false;
    text;
    image;
    quickReplies = []
    
    /**
     *Creates an instance of MessageComponent.
     * @param {DomSanitizer} sanitizer
     * @memberof MessageComponent
     */
    constructor(private sanitizer:DomSanitizer) {

    }


    /**
     * Set 'isRecivedMessage' flag based on message category.
     * Assign values to text, image and quick replies variables. 
     * Currently image and quick replies are only used for received message.
     * @memberof MessageComponent
     */
    ngOnInit() {
        if (!this.message) {
            throw new Error('Data Required')
        }
        if (this.message.getCategory() == MESSAGE_CATEGORY.RECEIVED) {
            this.isRecivedMessage = true
        }
        this.text = this.message.getText()
        this.image = this.message.getImageUrl()

        if (this.message instanceof ReceivedMessage) {  
            this.quickReplies = this.message.getQuickReplies()
        }
    }


    /**
     * Emit 'onOptionClicked' event with 'option text' payload
     * @param {string} option
     * @memberof MessageComponent
     */
    optionClicked(option) {
        this.onOptionClicked.emit(option)
    }


    /**
     * Set mouseover HostBinding for message component
     * This sets BoxShadow of component on 'hover'
     * @memberof MessageComponent
     */
    @HostListener('mouseover') onMouseOver() {
        if (this.isRecivedMessage) {
            this.boxShadow = this.sanitizer.bypassSecurityTrustStyle('1px 2px 8px rgba(33,33,33,.4)')
        } else {
            this.boxShadow = this.sanitizer.bypassSecurityTrustStyle('-2px 2px 8px rgba(33,33,33,.4)')
        }
    }

     /**
     * Set mouseleave HostBinding for message component
     * This removes BoxShadow of component.
     * @memberof MessageComponent
     */
    @HostListener('mouseleave') onMouseLeave() {
        this.boxShadow = 'none'
    }
}