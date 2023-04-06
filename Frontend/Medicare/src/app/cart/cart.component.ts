import { Component } from '@angular/core';
import { Product } from '../model/product';
import { MedicareserviceService } from '../service/medicare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  product: any=[];
  userLoggedIn: boolean;
  grandTotal !: number;
  constructor(private service: MedicareserviceService, private route: Router){}

  ngOnInit(){
    this.service.getProducts().subscribe(x=>{
      this.product=x
      console.log(x)
      this.userLoggedIn=true
      this.grandTotal = this.service.getTotal();
    })
  }

  removeItem(item : any){
    this.service.removeitem(item);
  }

  emptyCart(){
    this.service.emptyCart();
  }

  continueShopping(){
    this.route.navigate(['Home'])
  }

}
