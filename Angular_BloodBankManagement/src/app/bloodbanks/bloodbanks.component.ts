import { Component } from '@angular/core';
import { BlooduserserviceService } from '../blooduserservice.service';
import { BloodBankList } from '../BloodBankList';
import { Router } from '@angular/router';
import { BloodRequest } from '../BloodRequest';

@Component({
  selector: 'app-bloodbanks',
  templateUrl: './bloodbanks.component.html',
  styleUrl: './bloodbanks.component.css'
})
export class BloodbanksComponent {

  constructor(private httpService: BlooduserserviceService, private router:Router){}

  
  bloodbanks:any;
  isVisible: boolean = false;

  ngOnInit(){
    this.httpService.getBloodBank().subscribe(
      (response)=>{this.bloodbanks = response},
      (error)=>{console.log(error)}
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


  model = new BloodRequest("blood group" ,new Date().toISOString().slice(0,10), "", "Blood bank name", this.uid);

  goToAddRequest(bloodBankName:string){
    if(this.isLoggedIn()){
      this.model.blookBankName_donorName = bloodBankName;
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

  gotodonor(){
    this.router.navigate(['/userDonor']);
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
