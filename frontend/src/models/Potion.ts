class Potion {
    private _id: string;
    private itemName: string;
    private itemRarity: string;
    private itemDescription: string;
    private itemPrice: number;
    private skinURL: string;

    public constructor(
        _id: string,
        itemName: string,
        itemRarity: string,
        itemDescription: string,
        itemPrice: number,
        skinURL: string,
    ) {
        this._id = _id;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.skinURL = skinURL;
        this.itemPrice = itemPrice;
        this.itemRarity = itemRarity;
    }

    public getId(): string {
        return this._id;
    }

    public getItemName(): string {
        return this.itemName;
    }

    public setItemName(newName: string): void {
        this.itemName = newName;
    }

    public getItemDescription(): string {
        return this.itemDescription;
    }

    public setItemDescription(newItemDescription: string): void {
        this.itemDescription = newItemDescription;
    }

    public getSkinUrl(): string {
        return this.skinURL;
    }

    public setSkinUrl(newUrl: string): void {
        this.skinURL = newUrl;
    }

    public getItemPrice(): number {
        return this.itemPrice;
    }

    public setItemPrice(newitemPrice: number): void {
        this.itemPrice = newitemPrice;
    }

    public getItemRarity(): string {
        return this.itemRarity;
    }

    public setItemRarity(newitemRarity: string): void {
        this.itemRarity = newitemRarity;
    }
}

export default Potion;
