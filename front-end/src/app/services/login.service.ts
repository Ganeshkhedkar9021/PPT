import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Response } from './interfaces/response';
import {MasterService } from '../master.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ApiUrl:any="";
  constructor(private http: HttpClient,private masterservice:MasterService) { 
    this.http.get('../../assets/config/config.json').subscribe(
      data => {
        this.ApiUrl = data['ApiUrl'];
      }
    );
  }

  setheaders(){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
   // headers = headers.set('authorization', 'login' +'dddddddddddddddd');
    return headers;
  }

  login(loginInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${ this.ApiUrl}/login`,loginInfo,{headers:headers});
  
  }
}
