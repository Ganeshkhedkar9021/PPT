import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  readonly baseAppUrl: string = 'http://localhost:4200';
  //readonly baseAPIUrl: string = 'http://apiddrswms.katdev.com';
 // readonly baseAPIUrl: string =  "http://52.71.172.107:3000";
  readonly baseAPIUrl: string =  "http://localhost:3000";
  // readonly baseAPIUrl: string =  "http://172.16.4.14:3000";
 
 
  
  ApiUrl:any=''
  constructor(private http:HttpClient) { }
  getUrl(){
    this.http.get<{ApiUrl:string}>('../../../assets/config/config.json').subscribe(data=>{
      this.ApiUrl= data.ApiUrl;
      console.log("url",this.ApiUrl)
     });
  }
}
