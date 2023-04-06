import { Component } from '@angular/core';
import { MedicareserviceService } from '../service/medicare.service';
import { Router } from '@angular/router';
import { Login } from '../model/login';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  login : Login = new Login();

  constructor(private service: MedicareserviceService, private route : Router){}

  onSubmit(){
    this.service.adminLogin(this.login).subscribe(x=>{console.log(x)
    if(x===true){
      this.service.getAdminById(this.login.email).subscribe(x=>{
        this.service.addAdmin(x)
        console.log(x)
      })
      this.route.navigate(['dashboard'])
    }else{
      alert("invalid Password")
    }
    })  
  }

}
