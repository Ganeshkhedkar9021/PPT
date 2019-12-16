import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Response} from './interfaces/response';
import {MasterService } from '../master.service';

@Injectable({
  providedIn: 'root'
})
export class BitRecordService {

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
   
  createbitRecord(bitrecordInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/createbitrecord`,bitrecordInfo,{headers:headers})
  }
  bitRecord(){
    let headers = this.setheaders();
    return this.http.get<Response>(`${this.ApiUrl}/getbitrecords`,{headers:headers});
  }
  deletebitRecord(bitrecordId){
    let headers = this.setheaders();
    return this.http.delete<Response>(`${this.ApiUrl}/deletebitrecord/${bitrecordId}`,{headers:headers})
  }
}
