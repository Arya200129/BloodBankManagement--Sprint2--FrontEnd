import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BloodBankList } from './BloodBankList';
import { BloodRequest } from './BloodRequest';
import { bloodUser } from './BloodUser';

@Injectable({
  providedIn: 'root'
})
export class BlooduserserviceService {

  constructor(private http:HttpClient) { }

  user:bloodUser[] = new Array();

  getBloodBank(){
    const url="http://localhost:8080/getBloodBanks";
    return this.http.get(url);
  }

  getDonors(){
    const url="http://localhost:8080/getDonors";
    return this.http.get(url);
  }

  addRequest(model:BloodRequest, id:number){
    const url="http://localhost:8080/newRequest?bloodUserId="+id;
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType: 'text'});
    return this.http.post(url,model,{headers,'responseType': 'text'});
  }

  registerUser(model:bloodUser){
    const url="http://localhost:8080/registerBloodUser";
    var headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url,model,{headers});
  }

  public userId:any;

  loginUser(email:string, password:string){
    const url="http://localhost:8080/login/"+email+"/"+password;
    var headers= new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get<number>(url,{headers});
  }

  getRequests(uid:number){
    const url="http://localhost:8080/getBloodRequestByUserId/"+uid;
    return this.http.get(url);
  }

  deleteRequest(id:number){
    const url="http://localhost:8080/deleteBloodRequest/"+id;
    var headers = new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
    return this.http.delete(url,{headers, 'responseType':'text'});
  }

}
