import { QueryUpdateComponent } from '../../api-doc/query-update/query-update.component';
import { QuerySelectComponent } from '../../api-doc/query-select/query-select.component';
import { QueryRawComponent } from '../../api-doc/query-raw/query-raw.component';
import { QueryInsertComponent } from '../../api-doc/query-insert/query-insert.component';
import { QueryDeleteComponent } from '../../api-doc/query-delete/query-delete.component';
import { QueryCreateComponent } from '../../api-doc/query-create/query-create.component';
import {
    ConnectorCreateYourOwnComponent,
} from '../../api-doc/connector-create-your-own/connector-create-your-own.component';
import {
    ConnectorCordovaSqliteStorageWebsqlComponent,
} from '../../api-doc/connector-cordova-sqlite-storage-websql/connector-cordova-sqlite-storage-websql.component';
import { ConnectorWebsqlComponent } from '../../api-doc/connector-websql/connector-websql.component';
import {
    ConnectorCordovaSqliteStorageComponent,
} from '../../api-doc/connector-cordova-sqlite-storage/connector-cordova-sqlite-storage.component';
import { ClauseSyntaxicComponent } from '../../api-doc/clause-syntaxic/clause-syntaxic.component';
import { ClauseSubQueryComponent } from '../../api-doc/clause-sub-query/clause-sub-query.component';
import { ClauseGroupComponent } from '../../api-doc/clause-group/clause-group.component';
import { ClauseCompositeComponent } from '../../api-doc/clause-composite/clause-composite.component';
import { InitializationComponent } from '../../api-doc/initialization/initialization.component';
import { ModelCreationComponent } from '../../api-doc/model-creation/model-creation.component';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-api',
  templateUrl: 'api.html'
})
export class APIPage {
  private static chapters= {
    modelCreation: ModelCreationComponent,
    initialization: InitializationComponent,
    clauseComposite: ClauseCompositeComponent,
    clauseGroup: ClauseGroupComponent,
    clauseSubQuery: ClauseSubQueryComponent,
    clauseSyntaxic: ClauseSyntaxicComponent,
    connectorCordovaSqliteStorage: ConnectorCordovaSqliteStorageComponent,
    connectorWebsql: ConnectorWebsqlComponent,
    connectorCordovaSqliteStorageWebsql: ConnectorCordovaSqliteStorageWebsqlComponent,
    connectorCreateYourOwn: ConnectorCreateYourOwnComponent,
    queryCreate: QueryCreateComponent,
    queryDelete: QueryDeleteComponent,
    queryInsert: QueryInsertComponent,
    queryRaw: QueryRawComponent,
    querySelect: QuerySelectComponent,
    queryUpdate: QueryUpdateComponent
  }

  constructor(public navCtrl: NavController) {}

  public navToDoc(name: string) {
    this.navCtrl.push(APIPage.chapters[name]);
  }
}
