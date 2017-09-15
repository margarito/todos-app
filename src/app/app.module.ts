import { ApiDocModule } from '../api-doc/api-doc.module';
import { SharedModule } from '../shared/shared.module';
import { TodosModule } from '../todos/todos.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { APIPage } from '../pages/api/api';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    APIPage,
    HomePage,
    TabsPage
  ],
  imports: [
    TodosModule,
    SharedModule,
    ApiDocModule,
    IonicModule.forRoot(MyApp, {
       tabsHideOnSubPages: true,
       tabSubPages: false
       
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    APIPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
