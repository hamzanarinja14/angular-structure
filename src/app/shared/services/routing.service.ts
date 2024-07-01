import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Path } from '../helpers/enum';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {

  constructor(
    private router: Router,
    private location: Location,
    private modalCtrl: ModalController,
    private popCtrl: PopoverController
  ) { }

  goBack() {
    this.location.back();
  }

  goToDashboard() {
    this.route(Path.dashboard);
  }

  dynamicPath(path: string, params: string = '') {
    if (params) {
      this.route(path, false, { id: params });
    } else {
      this.route(path);
    }
  }

  route(path: string, replaceUrl: boolean = false, data?: any) {
    if (!data) {
      this.router.navigate([path], { replaceUrl });
    } else {
      this.router.navigate([path], {
        replaceUrl,
        queryParams: data,
      });
    }
  }

  async showModal(
    component: any,
    cssClass: string,
    props?: any,
    showBackdrop: boolean = true,
    backdropDismiss: boolean = true
  ) {
    const modal = await this.modalCtrl.create({
      component,
      cssClass,
      componentProps: props && props,
      showBackdrop,
      backdropDismiss,
    });
    await modal.present();
    const dismissRes = await modal.onWillDismiss();
    return dismissRes;
  }

  async showPopover(ev: any, component: any, cssClass: string, props?: any, showBackdrop: boolean = true) {
    const popover = await this.popCtrl.create({
      component: component,
      cssClass: cssClass,
      showBackdrop: showBackdrop,
      mode: 'ios',
      componentProps: props && props,
      event: ev
    });
    await popover.present();
    let dismissRes = await popover.onWillDismiss();
    return dismissRes;
  }

}
