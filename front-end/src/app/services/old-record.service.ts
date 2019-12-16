import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Response} from './interfaces/response';
import {MasterService } from '../master.service';

@Injectable({
  providedIn: 'root'
})
export class OldRecordService {

 
  ApiUrl:any = "";
  constructor(private http:HttpClient, private master:MasterService) {
    this.master.getUrl();
    this.ApiUrl = master.baseAPIUrl;
   // this.getUrl();
  }
  setheaders(){
    var token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('authorization', 'Bearer '+token);
    return headers;
  }
   
  OldRecord(oldreportInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/createold_report`,oldreportInfo)
  }
  getOldRecord(dates){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/getold_report`,dates,{headers:headers});
  }
  deleteOldRecord(oldrecordId){
    let headers = this.setheaders();
    return this.http.delete<Response>(`${this.ApiUrl}/deleteold_report/${oldrecordId}`,{headers:headers})
  }
  //deleteOldReport
}
