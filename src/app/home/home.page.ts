import { Component } from '@angular/core';
import { ApiProvider } from 'src/providers/api-provider/api-provider';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public listSku: any

  constructor(public api: ApiProvider, public navCtrl: NavController, private storage: Storage) {
    this.getListSku()
  }

  public getListSku() {


    this.api.get('transaction').subscribe((res: any) => {

      this.listSku = res
      this.storage.set('sku', res);

    }, (error) => {

      // persistencia de datos
      this.storage.get('sku').then((val) => {

        if (!val) {
          alert('Ha ocurrido un error vuelva a intentarlo')
          return
        }

        this.listSku = val
      });
    })

  }

  public navigateTransactionSku(sku: string) {
    this.navCtrl.navigateForward('/transaction-detail/' + sku, { animated: false });
  }

}
