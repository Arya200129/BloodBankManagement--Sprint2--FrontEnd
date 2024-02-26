import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';
import { BloodRequest } from '../BloodRequest';

@Component({
  selector: 'app-adminrequest',
  templateUrl: './adminrequest.component.html',
  styleUrl: './adminrequest.component.css'
})
export class AdminrequestComponent {

  constructor(private httpService:AdminserviceService, private router:Router){}

  requests:any;
  m:any;

  ngOnInit(){
    this.httpService.getRequest().subscribe(
      (response) => {this.requests = response},
      (error) => {console.log(error) }
    );
  }

  model:BloodRequest[] = new Array();

  setStatus(requestId: number, status: string): void {
    this.httpService.setStatus(requestId, status)
      .subscribe(
        () => {
          console.log('Status updated successfully');
        },
        error => {
          console.error('Error updating status:', error);
          // Handle error, e.g., show error message to user
        }
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
