import { Component, OnInit, Input} from '@angular/core';
import { IChatMessageOption } from '../../chat-view.component';


@Component({
    selector: 'chat-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss']
})



export class ChatHeaderComponent implements OnInit {

   
    /**
     * Input property to set title of chat header. Defualt: 'Chat View'
     * @memberof ChatHeaderComponent
     */
    @Input('title') title;

    
    /**
     * Input property to set chat header styling options.
     * @type {IChatMessageOption}
     * @memberof ChatHeaderComponent
     */
    @Input('headerOptions') headerOptions:IChatMessageOption

 
    /**
     *Creates an instance of ChatHeaderComponent.
     * @memberof ChatHeaderComponent
     */
    constructor() {
        this.title='Chat View'
    }

    ngOnInit() {
    }

}