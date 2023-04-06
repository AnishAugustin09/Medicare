import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { MedicareserviceService } from 'src/app/service/medicare.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  user : User[];
  
  constructor(private service: MedicareserviceService, private route : Router){}

  ngOnInit(){
    this.service.getAllUser().subscribe(x=> this.user=x)
  }

  deleteUser(email: string){
    this.service.deleteUser(email).subscribe(x=>{
      this.user = this.user?.filter(user => user.email !== email);
      alert('User deleted successfully');
    })
  }

  mainMenu(){
    this.route.navigate(['dashboard'])
  }
}
