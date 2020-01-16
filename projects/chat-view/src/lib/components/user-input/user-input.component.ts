import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
    selector: 'user-input',
    templateUrl: 'user-input.component.html',
    styleUrls: ['./user-input.component.scss'],

})

/**
 * UserInputComponent class. This class wraps user message input box and Send SVG Component.
 * Inputs: options- Set styling options for UserInputComponent
 * @export
 * @class UserInputComponent
 * @implements {OnInit}
 */
export class UserInputComponent implements OnInit {


    /**
     * Event emitter for send button click
     * @memberof UserInputComponent
     */
    @Output('onInput') onInput = new EventEmitter()


    /**
     * Input property to set CSS styling of the component
     * @memberof UserInputComponent
     */
    @Input('options') options
    
    /**
     * User entered input text
     * @memberof UserInputComponent
     */
    inputText;
    constructor() { }

    ngOnInit() {

    }

    /**
     * Triggered when send button is clicked
     * Triggers OnInput event with input text as data if input text is not null
     * Clears the input text on event emit
     * @memberof UserInputComponent
     */
    send() {
        if (this.inputText) {
            this.onInput.emit(this.inputText)
            this.inputText = ""
        }
    }
}