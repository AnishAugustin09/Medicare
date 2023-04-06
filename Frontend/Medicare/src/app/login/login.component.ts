import { Component } from '@angular/core';
import { Login } from '../model/login';
import { MedicareserviceService } from '../service/medicare.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login : Login = new Login();

  loginForm: FormGroup;

  status:String;

  constructor(private service: MedicareserviceService, private route: Router){}

  ngOnInit(){
    this.loginForm=new FormGroup({
      email: new FormControl('',[
        Validators.required,
      ]),
      password: new FormControl('',[
        Validators.required,
      ])
    })
  }

  onSubmit(){
    
    this.service.loginUser(this.login).subscribe(x=>{
      console.log(x)
      if(x==true){
        this.service.getById(this.login.email).subscribe(x=>{
        this.service.addProfile(x)
        console.log(x)
        this.userLoggedIn(x)
        this.route.navigate(['Home'])
        
        })
        
      }
      else if(x==null){
        alert("User Not Found")
      }
      else {
        alert("invalid password")
      }
    })
  }

  userLoggedIn(data: any):any{
    if(data==true)
      return true;
    else
      return false;
  }

  

  


}
