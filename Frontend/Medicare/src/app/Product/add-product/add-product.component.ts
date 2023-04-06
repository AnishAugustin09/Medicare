import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { MedicareserviceService } from 'src/app/service/medicare.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  product :Product = new Product();
  
  constructor(private service: MedicareserviceService,private route :Router){}

  onSubmit() {
    this.service.saveProduct(this.product).subscribe();
    alert("Product added successfully")
    this.route.navigate(['dashboard'])
  }
  mainMenu(){
    this.route.navigate(['dashboard'])
  }


}
