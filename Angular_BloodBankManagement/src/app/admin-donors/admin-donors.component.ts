import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
import { Donor } from '../Donor';

@Component({
  selector: 'app-admin-donors',
  templateUrl: './admin-donors.component.html',
  styleUrl: './admin-donors.component.css'
})
export class AdminDonorsComponent {

  constructor(private httpService: AdminserviceService, private router: Router) { }

  donors: any;
  m: any;

  ngOnInit() {
    this.httpService.getDonor().subscribe(
      (response) => { this.donors = response },
      (error) => { console.log(error) }
    );
  }

  update(id:number, name:string, bldgrp:string, contact:number){
    this.model1 = new Donor(id,name,bldgrp,contact);
    this.httpService.editDonor(this.model1).subscribe(
      (response) => {this.donors=response}
    );
    window.location.reload()
  }

  delete(id: number) {
    this.httpService.deleteDonor(id).subscribe(
      (response: string) => {
        this.m = response;
        console.log(this.m);
        if (this.m.indexOf('Donor record deleted successfully!') != -1)
          alert('Donor Record deleted successfully!')
        else
          document.write(this.m);
      },
      (error) => { console.log(error) }
    );
  }

  model1 = new Donor(1, "new donor", "blood group", 1111111111);
  create() {
    this.httpService.createDonor(this.model1).subscribe(
      (response) => { console.log(response) }
    );
    window.location.reload()
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
