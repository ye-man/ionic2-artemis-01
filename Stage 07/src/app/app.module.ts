
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule, NavController } from 'ionic-angular';

import { ArtemisSchedulerApp } from './app.component';
import { HomePage } from './pages/home/home';
import { ChairsComponent } from './components/chairs';
import { AboutPage } from './pages/about/about';
import { EditPage } from './pages/edit/edit';

import { DataService } from './services/data-service';

@NgModule({
  declarations: [
    ArtemisSchedulerApp,
    HomePage,
    ChairsComponent,
    AboutPage,
    EditPage,
  ],
  imports: [
    IonicModule.forRoot(ArtemisSchedulerApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ArtemisSchedulerApp,
    HomePage,
    AboutPage,
    EditPage
  ],
  providers: [
    DataService
  ]
})
export class AppModule {}
