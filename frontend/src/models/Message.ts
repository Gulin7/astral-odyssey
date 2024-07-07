import {Chat} from './Chat';
import {User} from './User';

export class Message {
    private _id: string;
    private sender: User;
    private content: string;
    private chat: Chat;

    public constructor(_id: string, sender: User, content: string, chat: Chat) {
        this._id = _id;
        this.sender = sender;
        this.content = content;
        this.chat = chat;
    }

    public getId(): string {
        return this._id;
    }

    public setId(newId: string): void {
        this._id = newId;
    }

    public getSender(): User {
        return this.sender;
    }

    public setSender(newSender: User): void {
        this.sender = newSender;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(newContent: string): void {
        this.content = newContent;
    }

    public getChat(): Chat {
        return this.chat;
    }

    public setChat(newChat: Chat): void {
        this.chat = newChat;
    }
}
