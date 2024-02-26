import { Component } from '@angular/core';
import { BlooduserserviceService } from '../blooduserservice.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-userrequest',
  templateUrl: './userrequest.component.html',
  styleUrl: './userrequest.component.css'
})
export class UserrequestComponent {

  constructor(private httpService: BlooduserserviceService, private router: Router) { }

  getStoredUid(): any {
    this.uid = sessionStorage.getItem('userId');
    return this.uid;
  }

  uid = this.getStoredUid();
  requests: any;
  m: any;

  isLoggedIn(): boolean {
    return sessionStorage.getItem('userId') !== null;
  }


  ngOnInit() {
    this.httpService.getRequests(this.uid).subscribe(
      (response) => { this.requests = response },
      (error) => { console.log(error) }
    );
  }

  delete(id: number) {
    this.httpService.deleteRequest(id).subscribe(
      (response: string) => {
        this.m = response;
        console.log(this.m);
        if (this.m.indexOf('Deleted BloodRequest Record') != -1)
          alert('Request deleted successfully')
        else
          document.write(this.m);
      },
      (error) => { console.log(error); }
    );
  }

  gotohomepage() {
    this.router.navigate(['/homepage']);
  }

  gotobb() {
    this.router.navigate(['/userBloodBank']);
  }

  gotodonor() {
    this.router.navigate(['/userDonor']);
  }

  // gotohome() {
  //   sessionStorage.removeItem('userId');
  //   console.log(sessionStorage.getItem('userId'));
  //   this.router.navigate(['/home']);
  // }
 
  logout() {
    // Perform logout actions
    sessionStorage.removeItem('userId');
    // Redirect to login page
    alert("Logged out successfully!");
  }

  login() {
    this.router.navigate(['/login']);
  }
  
}
