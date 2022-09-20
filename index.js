class Mobile{
    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.drafts = "";
        this.inbox = [];
        this.outbox =[];
        this.status = true;
    }
    checkStatus () {
        if (this.status === true) {
            this.battery--;
            return this.status;
        } else {
            console.log('Dien thoai dang tat')
        }
    }
    turnOnOff () {
        this.battery--;
        this.status = !this.status;
    }
    compose (text) {
        if (this.status === true) {
            this.battery--;
            this.drafts = text;
        } else {
            console.log('Dien thoai dang tat')
        }
    }
    sendMessage(person2) {
        //person1(this) send drafts to person 2 and save drafts in outbox of person 1
        if(this.status === true){
            this.outbox.push(this.drafts);
            //person2 receive message of person 1 into inbox of person2
            person2.inbox.push(this.drafts);
            //delete drafts
            this.drafts ="";
            this.battery--;
        }
        else {
            console.log('Dien thoai dang tat')
        }
    }
    getInbox(){
        if (this.status === true) {
            this.battery--;
            return this.inbox;
        }
    }
    getOutbox(){
        if (this.status === true) {
            this.battery--;
            return this.outbox;
        }
    }
}
let nokia = new Mobile('nokia');
let Iphone = new Mobile('iphone');
