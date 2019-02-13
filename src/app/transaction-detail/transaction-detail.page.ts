import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProvider } from '../../providers/api-provider/api-provider';
import { ListTransactionInterface } from '../../models/sku-interface';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.page.html',
  styleUrls: ['./transaction-detail.page.scss'],
})
export class TransactionDetailPage implements OnInit {

  public listTransaction: any
  public sumTransaction: number

  constructor(private activatedRoute: ActivatedRoute, public api: ApiProvider, private storage: Storage) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getTransactionForSku(params.id)
    });
  }

  public getTransactionForSku(sku: string) {

    this.api.get('transaction/' + sku).subscribe((res: ListTransactionInterface) => {

      this.listTransaction = res
      this.storage.set(sku, res);

      this.getTotalAmount()

    }, (error) => {
      
      // persistencia de datos
      this.storage.get(sku).then((val) => {

        if (!val) {
          alert('Ha ocurrido un error vuelva a intentarlo')
          return
        }

        this.listTransaction = val
        this.getTotalAmount()
      });

    })
  }

  public getTotalAmount() {
    const total: ListTransactionInterface = this.listTransaction.filter(x => x.sum != 0);
    this.sumTransaction = total[0].sum
  }

}
