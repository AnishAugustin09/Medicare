import { Component } from '@angular/core';
import { MedicareserviceService } from '../service/medicare.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  paymentType:number;
  grandTotal !: number;

  constructor(private service: MedicareserviceService){}

  ngOnInit(){
    this.grandTotal=this.service.getTotal();
  }

  debitcardpayment(){
    this.paymentType=1;
  }
  netBanking(){
    this.paymentType=2;
  }
  upiPayment(){
    this.paymentType=3;
  }

  codPayment(){
    this.paymentType=4;
  }

  payLater(){this.paymentType=5;
  }
}
