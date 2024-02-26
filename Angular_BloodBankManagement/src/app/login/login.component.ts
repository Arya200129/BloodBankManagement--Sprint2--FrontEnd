import { Component } from '@angular/core';
import { BlooduserserviceService } from '../blooduserservice.service';
import { Router } from '@angular/router';
import { bloodUser } from '../BloodUser';
import { BloodRequest } from '../BloodRequest';
import { response } from 'express';
import { error } from 'console';
import { AdminserviceService } from '../adminservice.service';
import { AdminLogin } from '../AdminLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private httpService: BlooduserserviceService, private httpAdminservice: AdminserviceService, private router: Router) { }

  requests: BloodRequest[] = new Array();
  user = new bloodUser("first name", "last name", 1111111111, "abc@gmail.com", "address", "123", this.requests);
  m: any;
  email: any;
  password: any;

  isLoginVisible: boolean = true;
  isRegVisible: boolean = false;
  isAdminVisible: boolean = false;

  goToRegister() {
    this.isLoginVisible = false;
    this.isAdminVisible = false;
    this.isRegVisible = true;
  }

  goToLogin() {
    this.isLoginVisible = true;
    this.isAdminVisible = false;
    this.isRegVisible = false;
  }

  goToAdminLogin() {
    this.isLoginVisible = false;
    this.isAdminVisible = true;
    this.isRegVisible = false;
  }

  login() {
    this.httpService.loginUser(this.email, this.password).subscribe(
      (response) => {
        this.m = response;
        console.log(this.m);
        if (typeof this.m === 'number' && !isNaN(this.m)) {
          sessionStorage.setItem('userId', this.m.toString());
          this.router.navigate(['/homepage']);
        }
        else {
          console.log(this.m);
        }
      },
      (error) => {if (error.status === 404) {
        console.log("Invalid email or password");
        alert('Invalid email or password');
      } else {
        console.log("An error occurred:", error);
        alert('An error occurred. Please try again later.');
      }
    }
    );
  }

  register() {
    this.httpService.registerUser(this.user).subscribe(
      (response) => {
        this.m = response;
        console.log(this.m)
        alert("Account Created!")
      },

      (error) => { console.log(error) }
    );
  }

  adminlogin() {
    this.httpAdminservice.loginAdmin(this.email, this.password).subscribe(
      (response: string) => {
        this.m = response;
        if (this.m === "You are Welcome")
          this.router.navigate(['/adminHomepage']);
        else
          alert(this.m);
      }
    );
  }

  gotohomepage(){
    this.router.navigate(['/homepage']);
  }

  gotoReq(){
    this.router.navigate(['/userRequest']);
  }

  gotobb() {
    this.router.navigate(['/userBloodBank']);
  }

  gotodonor(){
    this.router.navigate(['/userDonor']);
  }

}
