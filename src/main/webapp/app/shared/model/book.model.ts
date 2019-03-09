import { Moment } from 'moment';
import { IAuthor } from 'app/shared/model//author.model';

export interface IBook {
    id?: number;
    title?: string;
    description?: string;
    publicaitonDate?: Moment;
    price?: number;
    author?: IAuthor;
}

export class Book implements IBook {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public publicaitonDate?: Moment,
        public price?: number,
        public author?: IAuthor
    ) {}
}
