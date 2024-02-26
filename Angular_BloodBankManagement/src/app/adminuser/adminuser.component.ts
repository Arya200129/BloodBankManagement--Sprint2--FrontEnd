import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
import { Donor } from '../Donor';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrl: './adminuser.component.css'
})
export class AdminuserComponent {

  constructor(private httpService: AdminserviceService, private router: Router) { }

  users: any;
  m: any;

  ngOnInit(){
    this.httpService.getUser().subscribe(
      (response) => {this.users = response},
      (error) => {console.log(error) }
    );
  }

  delete(id:number){
    this.httpService.deleteUser(id).subscribe(
      (response: string) => {
        this.m = response;
        console.log(this.m);
        if (this.m.indexOf('BloodUser record deleted successfully!') != -1)
          alert('User record deleted successfully!')
        else
          document.write(this.m);
      },
      (error) => { console.log(error) }
    );
  }

  gotohome(){
    sessionStorage.removeItem('userId');
    console.log(sessionStorage.getItem('userId'));
    this.router.navigate(['/login']);
  }

  gotoAhome(){
    this.router.navigate(['/adminHomepage']);
  }
}
