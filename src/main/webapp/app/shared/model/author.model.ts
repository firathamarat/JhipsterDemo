import { IBook } from 'app/shared/model/book.model';

export interface IAuthor {
    id?: number;
    name?: string;
    phone?: string;
    address?: string;
    books?: IBook[];
}

export class Author implements IAuthor {
    constructor(public id?: number, public name?: string, public phone?: string, public address?: string, public books?: IBook[]) {}
}
