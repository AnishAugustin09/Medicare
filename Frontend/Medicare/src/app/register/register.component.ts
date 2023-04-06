import { Component } from '@angular/core';
import { Register } from '../model/register';
import { MedicareserviceService } from '../service/medicare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registeration: boolean = false;
  
  register : Register = new Register()

  isChecked = false;
  
  constructor(private service: MedicareserviceService,private route: Router){}

onSubmit() {
  this.service.registerUser(this.register).subscribe();
  alert("Registered Successfully")
  this.route.navigate(['login'])
}
onCheckboxChange(checked: boolean) {
  this.isChecked = checked;
}
check(){
  this.isChecked= true
}

}
