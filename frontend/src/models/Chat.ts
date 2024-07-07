import {User} from './User';

export class Chat {
    private _id: string;
    private chatName: string;
    private isGroupChat: boolean;
    private users: Array<User>;

    public constructor(
        _id: string,
        chatName: string,
        isGroupChat: boolean,
        users: Array<User>,
    ) {
        this._id = _id;
        this.chatName = chatName;
        this.isGroupChat = isGroupChat;
        this.users = users;
    }

    public getId(): string {
        return this._id;
    }

    public setId(newId: string): void {
        this._id = newId;
    }

    public getChatName(): string {
        return this.chatName;
    }

    public setChatName(newName: string): void {
        this.chatName = newName;
    }

    public getIsGroupChat(): boolean {
        return this.isGroupChat;
    }

    public setIsGroupChat(newIsGroupChat: boolean): void {
        this.isGroupChat = newIsGroupChat;
    }

    public getUsers(): Array<User> {
        return this.users;
    }

    public setUsers(newUsers: Array<User>): void {
        this.users = newUsers;
    }
}
