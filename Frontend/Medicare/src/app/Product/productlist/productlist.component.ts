import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { MedicareserviceService } from 'src/app/service/medicare.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  product : Product[];

  constructor(private service:MedicareserviceService,private route: Router){}

  ngOnInit(){
    this.service.getAllProduct().subscribe(x=>this.product=x);
  }

  deleteProduct(id: number){
    this.service.deleteProduct(id).subscribe(x=>{
      this.product = this.product?.filter(product => product.id !== id);
      alert('Product deleted successfully');
    })
  }

  mainMenu(){
    this.route.navigate(['dashboard'])
  }
}
