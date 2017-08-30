import { NgModule } from '@angular/core';
import { getDbHelperModuleConfiguration } from './configs/database.config';
import { NgDbHelperModule } from 'ng-db-helper';

@NgModule({
  imports: [
    NgDbHelperModule.forRoot(getDbHelperModuleConfiguration)
  ],
  declarations: []
})
export class CoreModule { }