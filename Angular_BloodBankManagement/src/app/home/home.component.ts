import { Component } from '@angular/core';
import { BlooduserserviceService } from '../blooduserservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private httpService:BlooduserserviceService, private router:Router){}

  isLoggedIn(): boolean {
    return sessionStorage.getItem('userId') !== null;
  }

  logout() {
    // Perform logout actions
    sessionStorage.removeItem('userId');
    // Redirect to login page
    alert("Logged out successfully!");
  }

  login() {
    this.router.navigate(['/login']);
  }
  
  // gotohome(){
  //   sessionStorage.removeItem('userId');
  //   console.log(sessionStorage.getItem('userId'));
  //   this.router.navigate(['/home']);
  // }

  gotoReq(){
    this.router.navigate(['/userRequest']);
  }

  gotodonor(){
    this.router.navigate(['/userDonor']);
  }

  gotobb(){
    this.router.navigate(['/userBloodBank']);
  }
  
}
