import { MESSAGE_CATEGORY, ReceivedMessage, SentMessage } from './message-data';




describe('MessageData', () => {
    let sentMessage:SentMessage;
    let recievedMessage:ReceivedMessage;
    const SENT_TEXT='sent-text'
    const RECEIVED_TEXT='received-text'
    const RECEIVED_IMAGE='https://placehold.te/200X30'
    const RECEIVED_QUICK_REPLIES=['One','Two']
    beforeEach(()=>{
        sentMessage=new SentMessage().setText(SENT_TEXT)
        recievedMessage=new ReceivedMessage().setText(RECEIVED_TEXT).setImageUrl(RECEIVED_IMAGE).setQuickReplies(RECEIVED_QUICK_REPLIES)
    })


    it('should have sent message data as defined',()=>{
        expect(sentMessage.getCategory()).toEqual(MESSAGE_CATEGORY.SENT)
        expect(sentMessage.getText()).toEqual(SENT_TEXT)
    })

    it('should have received message data as defined',()=>{
        expect(recievedMessage.getCategory()).toEqual(MESSAGE_CATEGORY.RECEIVED)
        expect(recievedMessage.getText()).toEqual(RECEIVED_TEXT)
        expect(recievedMessage.getImageUrl()).toEqual(RECEIVED_IMAGE)
        expect(recievedMessage.getQuickReplies()).toEqual(RECEIVED_QUICK_REPLIES)
    })

});
