import { Component } from '@angular/core';
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public toastController: ToastController) {}

  async openToast() {
    const toast = await this.toastController.create({
      message: 'O seu cupão foi ativado.',
      duration: 2000
    });
    toast.present();
  }
}