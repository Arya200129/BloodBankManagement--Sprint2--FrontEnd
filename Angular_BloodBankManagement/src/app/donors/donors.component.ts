import { Component } from '@angular/core';
import { BlooduserserviceService } from '../blooduserservice.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';
import { Donor } from '../Donor';
import { BloodRequest } from '../BloodRequest';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrl: './donors.component.css'
})
export class DonorsComponent {

  constructor(private httpService:BlooduserserviceService, private router:Router){}

  donors: any;
  name:any;
  isVisible: boolean = false;

  ngOnInit(){
    this.httpService.getDonors().subscribe(
      (response)=>{this.donors = response},
      (error) => {console.log(error)}
    );
  }

  getStoredUid(): any {
    this.uid= sessionStorage.getItem('userId');
    return this.uid;
  }

  uid=this.getStoredUid();

  
  isLoggedIn(): boolean {
    return sessionStorage.getItem('userId') !== null;
  }

  
  model = new BloodRequest("blood group", new Date().toISOString().slice(0,10), "", "donor name", this.uid);

  goToAddRequest(donorName:string){
    if(this.isLoggedIn()){
      this.model.blookBankName_donorName = donorName;
      this.isVisible=true;
    }
    else{
      alert("Please Log in first to send request!")
    }
    
  }

  m:any;

  sendRequest(){
    this.httpService.addRequest(this.model, this.model.bloodUserId).subscribe(
      (response:string) => { this.m = response;
      console.log(this.m);
      if(this.m.indexOf('applied new request successfully') != -1)
        alert('Request sent successfully!')
      else
        console.log(this.m);
    },
    (error) => {console.log(error)}
    );
  }

  cancelRequest(){
    this.isVisible=false;
  }




  gotohomepage(){
    this.router.navigate(['/homepage']);
  }

  gotoReq(){
    this.router.navigate(['/userRequest']);
  }

  gotobb(){
    this.router.navigate(['/userBloodBank']);
  }

  // gotohome(){
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
