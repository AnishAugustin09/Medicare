import { Component } from '@angular/core';
import { Admin } from '../model/admin';
import { MedicareserviceService } from '../service/medicare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  admin: Admin[]
  constructor(private service: MedicareserviceService, private route:Router){}

  ngOnInit(){
    this.service.getAdminPro().subscribe(x=>{
      this.admin=x
    })
  }

  logout(){
    this.service.removeAdmin()
    alert("Logged Out")
    this.route.navigate(['login'])
  }

}
