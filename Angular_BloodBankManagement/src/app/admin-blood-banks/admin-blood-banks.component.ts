import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { response } from 'express';
import { error } from 'console';
import { Router } from '@angular/router';
import { BloodBankList } from '../BloodBankList';

@Component({
  selector: 'app-admin-blood-banks',
  templateUrl: './admin-blood-banks.component.html',
  styleUrl: './admin-blood-banks.component.css'
})
export class AdminBloodBanksComponent {

  constructor(private httpService: AdminserviceService, private router: Router) { }

  bloodbanks: any;
  model1:any;
  m: any;

  ngOnInit() {
    this.httpService.getBloodBank().subscribe(
      (response) => { this.bloodbanks = response },
      (error) => { console.log(error) }
    );
  }

  update(id:number, name:string, location:string, contact:number, addr:string){
    this.model1 = new BloodBankList(id,name,location,contact,addr);
    this.httpService.edit(this.model1).subscribe(
      (response) => {this.bloodbanks=response}
    );
    window.location.reload()
  }

  delete(id: number) {
    this.httpService.delete(id).subscribe(
      (response: string) => {
        this.m = response;
        console.log(this.m);
        if (this.m.indexOf('Blood Bank record deleted successfully!') != -1)
          alert('Record deleted successfully!')
        else
          document.write(this.m);
      },
      (error) => { console.log(error) }
    );
  }

  model = new BloodBankList(1, "new blood bank", "location", 1111111111, "address");
  create() {
    this.httpService.create(this.model).subscribe(
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
