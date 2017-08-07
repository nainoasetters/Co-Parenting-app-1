import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { NiceChat } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

import { Database } from '../providers/database';
import { TabsService } from '../providers/tabs.service';



@NgModule({
  declarations: [
    NiceChat,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(NiceChat, {
      preloadModules: true,
      backButtonText: '',
      menuType: 'overlay',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      platforms: {
        ios: {
          scrollAssist: false,
          autoFocusAssist: false,
          inputBlurring: false,
          statusbarPadding: true,
          tabsHideOnSubPages: true
        },
        android: {
          scrollAssist: false,
          autoFocusAssist: false,
          tabsHideOnSubPages: true
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NiceChat,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Database,
    TabsService
  ]
})
export class AppModule { }
