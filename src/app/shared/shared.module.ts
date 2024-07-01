import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonService } from './services/common.service';
import { HttpService } from './services/http.service';
import { RoutingService } from './services/routing.service';
import { UtilService } from './services/util.service';
import { StorageService } from './services/storage.service';
import { FirebaseService } from './services/firebase.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    CommonService,
    HttpService,
    RoutingService,
    UtilService,
    StorageService,
    FirebaseService,
  ],
})
export class SharedModule {}
