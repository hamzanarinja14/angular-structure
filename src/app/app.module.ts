import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StorageService } from './shared/services/storage.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './shared/helpers/token.interceptor';
import { FirebaseService } from './shared/services/firebase.service';
import { UtilService } from './shared/services/util.service';
import { HttpService } from './shared/services/http.service';
import { CommonService } from './shared/services/common.service';
import { RoutingService } from './shared/services/routing.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    CommonService,
    HttpService,
    RoutingService,
    UtilService,
    StorageService,
    FirebaseService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
