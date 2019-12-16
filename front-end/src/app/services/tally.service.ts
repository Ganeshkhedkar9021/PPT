import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Response} from './interfaces/response';
import {MasterService } from '../master.service';
@Injectable({
  providedIn: 'root'
})
export class TallyService {

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
   
  getTallySheets() {
    let headers = this.setheaders();
    return this.http.get<Response>(`${this.ApiUrl}/gettallys`,{headers:headers})
  }

    
    createTally(tallyInfo){
      let headers = this.setheaders();
      return this.http.post<Response>(`${this.ApiUrl}/createtally`,tallyInfo,{headers:headers})
    }


    tallyMaster(){
      let headers = this.setheaders();
      return this.http.get<Response>(`${this.ApiUrl}/createtally`,{headers:headers});
    }

    getWellRigs(){
      let headers = this.setheaders();
      return this.http.get<Response>(`${this.ApiUrl}/getwellrig`,{headers:headers});
    }

    deleteTally(tallyId){
      let headers = this.setheaders();
      return this.http.delete<Response>(`${this.ApiUrl}/deletetally/${tallyId}`,{headers:headers});
    }
    
    getWellTallySheets(wellId){
      let headers = this.setheaders();
      return this.http.get<Response>(`${this.ApiUrl}/getwelltally/${wellId}`,{headers:headers});
    }

}
