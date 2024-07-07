export class Message {
    private _id: string;
    private senderId: string;
    private receiverId: string;
    private message: string;

    public constructor(
        id: string,
        senderId: string,
        receiverId: string,
        message: string,
    ) {
        this._id = id;
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.message = message;
    }

    public getId(): string {
        return this._id;
    }

    public setId(newId: string): void {
        this._id = newId;
    }

    public getSenderId(): string {
        return this.senderId;
    }

    public setSenderId(newSenderId: string): void {
        this.senderId = newSenderId;
    }

    public getReceiverId(): string {
        return this.receiverId;
    }

    public setReceiverId(newReceiverId: string): void {
        this.receiverId = newReceiverId;
    }
}
