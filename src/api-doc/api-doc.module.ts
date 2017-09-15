import { NgCollapsableModule } from '../ng-collapsable/ng-collapsable.module';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { ModelCreationComponent } from './model-creation/model-creation.component';
import { MarkdownModule } from 'angular2-markdown';
import { InitializationComponent } from './initialization/initialization.component';
import { ClauseCompositeComponent } from './clause-composite/clause-composite.component';
import { ClauseGroupComponent } from './clause-group/clause-group.component';
import { ClauseSubQueryComponent } from './clause-sub-query/clause-sub-query.component';
import { ClauseSyntaxicComponent } from './clause-syntaxic/clause-syntaxic.component';
import { ConnectorCordovaSqliteStorageComponent } from './connector-cordova-sqlite-storage/connector-cordova-sqlite-storage.component';
import { ConnectorWebsqlComponent } from './connector-websql/connector-websql.component';
import { ConnectorCordovaSqliteStorageWebsqlComponent } from './connector-cordova-sqlite-storage-websql/connector-cordova-sqlite-storage-websql.component';
import { ConnectorCreateYourOwnComponent } from './connector-create-your-own/connector-create-your-own.component';
import { QueryCreateComponent } from './query-create/query-create.component';
import { QueryDeleteComponent } from './query-delete/query-delete.component';
import { QueryInsertComponent } from './query-insert/query-insert.component';
import { QueryRawComponent } from './query-raw/query-raw.component';
import { QuerySelectComponent } from './query-select/query-select.component';
import { QueryUpdateComponent } from './query-update/query-update.component';
import { TestBlockComponent } from './test-block/test-block.component';

@NgModule({
  imports: [
    SharedModule,
    MarkdownModule.forRoot(),
    NgCollapsableModule,
    IonicModule.forRoot(ApiDocModule)
  ],
  declarations: [
    ModelCreationComponent,
    InitializationComponent,
    ClauseCompositeComponent,
    ClauseGroupComponent,
    ClauseSubQueryComponent,
    ClauseSyntaxicComponent,
    ConnectorCordovaSqliteStorageComponent,
    ConnectorWebsqlComponent,
    ConnectorCordovaSqliteStorageWebsqlComponent,
    ConnectorCreateYourOwnComponent,
    QueryCreateComponent,
    QueryDeleteComponent,
    QueryInsertComponent,
    QueryRawComponent,
    QuerySelectComponent,
    QueryUpdateComponent,
    TestBlockComponent
],
  exports: [
    ModelCreationComponent,
    InitializationComponent,
    ClauseCompositeComponent,
    ClauseGroupComponent,
    ClauseSubQueryComponent,
    ClauseSyntaxicComponent,
    ConnectorCordovaSqliteStorageComponent,
    ConnectorWebsqlComponent,
    ConnectorCordovaSqliteStorageWebsqlComponent,
    ConnectorCreateYourOwnComponent,
    QueryCreateComponent,
    QueryDeleteComponent,
    QueryInsertComponent,
    QueryRawComponent,
    QuerySelectComponent,
    QueryUpdateComponent
  ],
  entryComponents: [
    ModelCreationComponent,
    InitializationComponent,
    ClauseCompositeComponent,
    ClauseGroupComponent,
    ClauseSubQueryComponent,
    ClauseSyntaxicComponent,
    ConnectorCordovaSqliteStorageComponent,
    ConnectorWebsqlComponent,
    ConnectorCordovaSqliteStorageWebsqlComponent,
    ConnectorCreateYourOwnComponent,
    QueryCreateComponent,
    QueryDeleteComponent,
    QueryInsertComponent,
    QueryRawComponent,
    QuerySelectComponent,
    QueryUpdateComponent
  ]
})
export class ApiDocModule { }