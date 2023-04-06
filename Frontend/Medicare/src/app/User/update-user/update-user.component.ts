import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { MedicareserviceService } from 'src/app/service/medicare.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  user: User= new User();
  constructor(private service: MedicareserviceService,private route: Router, private activateRoute: ActivatedRoute){}
  onSubmit(){
    const email= this.activateRoute.snapshot.paramMap.get("email")!
    console.log(typeof(email))
    this.service.updateUser(this.user,email).subscribe(x=>
      {
        alert("Profile Updated")
        this.route.navigate(['profile'])
      })
  }
}
