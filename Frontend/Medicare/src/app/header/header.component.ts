import { Component } from '@angular/core';
import { MedicareserviceService } from '../service/medicare.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public totalItem :number;
  public search: string="";
  constructor(private service: MedicareserviceService){}

  ngOnInit():void{
    this.service.getProducts().subscribe(x=>{
      this.totalItem=x.length
    })


  }

  searchproduct(event:any){
    this.search=(event.target as HTMLInputElement).value;
    console.log(this.search)
    this.service.search.next(this.search)
  }
}
