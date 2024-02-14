import { PriceModel } from "./price.model";

export class BookModel
{
    public id : number;
    public title: string;
    public totalPages: number;
    private _author : string;
    public isPublished : boolean;
    public publishedOn : Date;
    public price: PriceModel;

    public get author():string
    {
        return this._author;
    }
    public set author(auther:string)
    {
        this._author= "Author : " + auther;
    }
}