import { NgModule } from '@angular/core';

import { JhipsterDemoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterDemoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterDemoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterDemoSharedCommonModule {}
