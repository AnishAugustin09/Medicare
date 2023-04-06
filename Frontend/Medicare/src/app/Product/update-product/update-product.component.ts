import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { MedicareserviceService } from 'src/app/service/medicare.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  product : Product = new Product();
  email: string|null;
  constructor(private service: MedicareserviceService, private route: Router,private activatedroute:ActivatedRoute){}

  onSubmit(){
    const id= this.activatedroute.snapshot.paramMap.get("id")
    this.service.updateProduct(this.product, Number(id)).subscribe(x=>{
      alert("Product Edited Successfully")
      this.route.navigate(['dashboard'])

    })
  }
}
