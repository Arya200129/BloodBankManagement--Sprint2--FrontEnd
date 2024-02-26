import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {

  constructor(private httpService:AdminserviceService, private router:Router){}

  gotohome(){
    sessionStorage.removeItem('userId');
    console.log(sessionStorage.getItem('userId'));
    this.router.navigate(['/login']);
  }

  gotoAbb(){
    this.router.navigate(['/adminBloodBank']);
  }

  gotoAdonor(){
    this.router.navigate(['/adminDonor']);
  }

  gotoReq(){
    this.router.navigate(['/adminRequest']);
  }

  gotoUser(){
    this.router.navigate(['/adminUser']);
  }
}
