import { Component } from '@angular/core';
import { MedicareserviceService } from '../service/medicare.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  product : Product[]
  searchkey : string=''
  constructor(private service : MedicareserviceService){}

  ngOnInit(){
    this.service.getAllProduct().subscribe(x=>this.product=x)
    this.service.search.subscribe((x:any)=>{
      this.searchkey=x
    })
  }

  addtoCart(item:any){
    this.service.addtoCart(item);
    console.log(item);
    this.product.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price})
    })
  }

  

}
