import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BloodBankList } from './BloodBankList';
import { Donor } from './Donor';
import { AdminLogin } from './AdminLogin';
import { BloodRequest } from './BloodRequest';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  getBloodBank(){
    const url="http://localhost:8080/getBloodBanks";
    return this.http.get(url);
  }

  edit(bb:BloodBankList){
    const url = "http://localhost:8080/editBloodBank/"+bb.bloodBankId;
    var headers= new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(url, bb, {headers});
  }

  delete(id:number){
    const url="http://localhost:8080/deleteBloodBank/"+id;
    var headers = new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
    return this.http.delete(url,{headers, 'responseType':'text'});
  }

  create(model:BloodBankList){
    const url="http://localhost:8080/addBloodBank";
    var headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url,model,{headers});
  }

  getDonor(){
    const url="http://localhost:8080/getDonors";
    return this.http.get(url);
  }

  editDonor(d:Donor){
    const url = "http://localhost:8080/editDonor/"+d.donorId;
    var headers= new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(url, d, {headers});
  }

  deleteDonor(id:number){
    const url="http://localhost:8080/deleteDonor/"+id;
    var headers = new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
    return this.http.delete(url,{headers, 'responseType':'text'});
  }

  createDonor(model:Donor){
    const url="http://localhost:8080/addDonor";
    var headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url,model,{headers});
  }

  loginAdmin(email:string, password:string){
    const url="http://localhost:8080/adminlogin/"+ email +"/"+ password;
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType: 'text'});
    return this.http.get(url,{headers,'responseType': 'text'});
  }

  getRequest(){
    const url="http://localhost:8080/getAllBloodRequestDetails";
    return this.http.get(url);
  }

  setStatus(requestId: number, status: string): Observable<BloodRequest> {
    const url = `http://localhost:8080/setStatus/${requestId}`;
    return this.http.put<BloodRequest>(url, { status })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling
  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError('An error occurred. Please try again later.');
  }

  getUser(){
    const url="http://localhost:8080/getAllBloodUserDetails";
    return this.http.get(url);
  }

  deleteUser(id:number){
    const url="http://localhost:8080/deleteBloodUser/"+id;
    var headers = new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
    return this.http.delete(url,{headers, 'responseType':'text'});
  }
}
