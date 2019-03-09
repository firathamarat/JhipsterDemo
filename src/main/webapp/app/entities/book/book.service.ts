import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IBook } from 'app/shared/model/book.model';

type EntityResponseType = HttpResponse<IBook>;
type EntityArrayResponseType = HttpResponse<IBook[]>;

@Injectable({ providedIn: 'root' })
export class BookService {
    public resourceUrl = SERVER_API_URL + 'api/books';
    public resourceSearchUrl = SERVER_API_URL + 'api/_search/books';

    constructor(protected http: HttpClient) {}

    create(book: IBook): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(book);
        return this.http
            .post<IBook>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(book: IBook): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(book);
        return this.http
            .put<IBook>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IBook>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IBook[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IBook[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    protected convertDateFromClient(book: IBook): IBook {
        const copy: IBook = Object.assign({}, book, {
            publicaitonDate:
                book.publicaitonDate != null && book.publicaitonDate.isValid() ? book.publicaitonDate.format(DATE_FORMAT) : null
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.publicaitonDate = res.body.publicaitonDate != null ? moment(res.body.publicaitonDate) : null;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach((book: IBook) => {
                book.publicaitonDate = book.publicaitonDate != null ? moment(book.publicaitonDate) : null;
            });
        }
        return res;
    }
}
