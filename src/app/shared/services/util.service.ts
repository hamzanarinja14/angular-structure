import { Injectable } from '@angular/core';
import {
  ToastController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { StorageService } from './storage.service';
import { Toaster } from '../helpers/enum';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class UtilService {

  constructor(
    public toastController: ToastController,
    private storage: StorageService,
    public loadingController: LoadingController,
    public sanitizer: DomSanitizer,
    public modalCtrl: ModalController,
    public http: HttpService
  ) { }

  async downloadFile(name: string, url: string) {
    let link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', url);
    link.setAttribute('download', name);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  async showToast(msg: any, toaster: Toaster = Toaster.success, duration?: any) {
    const toast = await this.toastController.create({
      message: msg,
      position: 'top',
      cssClass: toaster,
      mode: 'md',
      duration: duration ? duration : 3000,
    });
    toast.present();
  }

  async showLoader(message?: string) {
    const defaultMessage = 'Please Wait...';
    return await this.loadingController.create({
      spinner: null,
      animated: true,
      backdropDismiss: true,
      translucent: true,
      cssClass: 'custom-loader',
      message: message ? message : defaultMessage,
      mode: 'ios',
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000, 
      position: 'top', 
      cssClass:'error'
    });
    toast.present();
  }
  

}
