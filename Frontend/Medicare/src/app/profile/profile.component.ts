import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MedicareserviceService } from '../service/medicare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  profile:any=[]

  constructor(private service: MedicareserviceService,private route: Router){}

  ngOnInit(){
    this.service.getProfile().subscribe(x=>{
      this.profile=x
      console.log(x)
    })
  }

  logout(){
    this.service.emptyProfile();
    alert("Logged Out")
    this.route.navigate(['login'])
  }
}
