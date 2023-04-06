import { Component } from '@angular/core';
import { MedicareserviceService } from '../service/medicare.service';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent {

  product: any=[];
  profile: any=[]
 
  constructor(private service: MedicareserviceService){}

  ngOnInit(){
    this.service.getProducts().subscribe(x=>{
      this.product=x
    })

    this.service.getProfile().subscribe(x=>{
      this.profile=x
    })

    
  }

  checkout(){
    this.service.emptyCart();
  }
}


