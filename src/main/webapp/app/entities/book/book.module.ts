import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterDemoSharedModule } from 'app/shared';
import {
    BookComponent,
    BookDetailComponent,
    BookUpdateComponent,
    BookDeletePopupComponent,
    BookDeleteDialogComponent,
    bookRoute,
    bookPopupRoute
} from './';

const ENTITY_STATES = [...bookRoute, ...bookPopupRoute];

@NgModule({
    imports: [JhipsterDemoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [BookComponent, BookDetailComponent, BookUpdateComponent, BookDeleteDialogComponent, BookDeletePopupComponent],
    entryComponents: [BookComponent, BookUpdateComponent, BookDeleteDialogComponent, BookDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterDemoBookModule {}
