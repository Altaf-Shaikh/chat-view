
/*
* Defines Message categories
*/
export const MESSAGE_CATEGORY = {
    SENT: 'sent',
    RECEIVED: 'received'
}

/*
* Defines Message types
*/
export const MESSAGE_TYPES = {
    TEXT: 'text',
    IMAGE: 'image'
}


/**
 * Parent to: ReceivedMessage, SentMessage
 *
 * @export
 * @class Message
 */
export class Message {
    /**
     * Category of Message : Values includes MESSAGE_CATEGORY class
     * @private
     * @memberof Message
     */
    private category;


    /**
     * Message Text: Used for both Sent and Received Messages
     * @private
     * @type {string}
     * @memberof Message
     */
    private text: string;


    /**
     * Image URL: Used for both Sent and Received Messages
     * @private
     * @type {string}
     * @memberof Message
     */
    private imageUrl: string;


    /**
     * Creates an instance of Message.
     * @param {*} category
     * @memberof Message
     */
    constructor(category) {
        this.category = category
    }


    /**
     * Set text of message : Used for both Sent and Received Messages
     * @param {string} text
     * @returns Message
     * @memberof Message
     */
    setText(text: string) {
        this.text = text
        return this
    }


    /**
     * Returns message text  
     * @returns string
     * @memberof Message
     */
    getText() {
        return this.text
    }


    /**
     * Set image URL of message : Used for both Sent and Received Messages
     * @param {string} imageUrl
     * @returns Message
     * @memberof Message
     */
    setImageUrl(imageUrl: string) {
        this.imageUrl = imageUrl
        return this
    }


    /**
     * Returns image URL
     * @returns string
     * @memberof Message
     */
    getImageUrl() {
        return this.imageUrl
    }


    /**
     * Returns message category
     * @returns string
     * @memberof Message
     */
    getCategory() {
        return this.category
    }
}

/**
 * This class is used to create an instance of ReceivedMessage
 * It extends parent Message class with methods to set/get QuickReplies
 *
 * @export
 * @class ReceivedMessage
 * @extends {Message}
 */
export class ReceivedMessage extends Message {

    /**
     * Set Quick Replies buttons in received message
     * @private
     * @type {string[]}
     * @memberof ReceivedMessage
     */
    private quickReplies: string[]

    /**
     *Creates an instance of ReceivedMessage.
     * @memberof ReceivedMessage
     */
    constructor() {
        /*
        * Set Message category as "Received" to parent class "Message"
        */
        super(MESSAGE_CATEGORY.RECEIVED)
    }


    /**
     * Set quick replies of Receiveed Message
     * @param {string[]} quickReplies
     * @returns ReceivedMessage
     * @memberof ReceivedMessage
     */
    setQuickReplies(quickReplies: string[]) {
        this.quickReplies = quickReplies
        return this
    }


    /**
     * Returns the set quick replies
     * @returns string[]
     * @memberof ReceivedMessage
     */
    getQuickReplies() {
        return this.quickReplies
    }
}

/**
 * This class is used to create an instance of SentMessage
 * It extends parent Message class no additional methods.
 *
 * @export
 * @class SentMessage
 * @extends {Message}
 */
export class SentMessage extends Message {

    /**
     *Creates an instance of SentMessage.
     * @memberof SentMessage
     */
    constructor() {
         /*
        * Set Message category as "Sent" to parent class "Message"
        */
        super(MESSAGE_CATEGORY.SENT)
    }

}