import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {MasterService } from '../master.service';
import {Response} from './interfaces/response';
@Injectable({
  providedIn: 'root'
})
export class MastersService {
  ApiUrl:any = "";
  constructor(private http:HttpClient, private master:MasterService) {
    this.master.getUrl();
    this.ApiUrl = master.baseAPIUrl;
   // this.getUrl();
  }
  setheaders(){
    var token = localStorage.getItem('token');
    console.log("Header of master service: ",token);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('authorization', 'Bearer '+token);
    return headers;
  }
  getwells(){
    console.log("This is api url",this.ApiUrl);
    let headers = this.setheaders();
    return this.http.get<Response>(`${this.ApiUrl}/wells`,{headers:headers});
  }
  createWell(wellInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/createwell`,wellInfo,{headers:headers});
  }
  getactivewell(){
    let headers = this.setheaders();
    return this.http.get<Response>(`${this.ApiUrl}/getactivewell`,{headers:headers});
  }
  endWell(wellId){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/endwell`,wellId,{headers:headers})
  }

  createCrewMember(crewMemInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/createcrew_member`,crewMemInfo,{headers:headers})
  }
  crewMembers(){
    let headers = this.setheaders();
    return this.http.get<Response>(`${this.ApiUrl}/getcrew_members`,{headers:headers});
  }

  checkExistCrewMember(crewmemInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/checkcrew_member`,crewmemInfo,{headers:headers})
  }
  // checkExistCrewMember1(crewmemInfo){
  //   let headers = this.setheaders();
  //   return this.http.post<Response>(`${this.ApiUrl}/checkcrew_member1`,crewmemInfo,{headers:headers})
  // }
  deleteCrewMem(crewId){
    let headers = this.setheaders();
    return this.http.delete<Response>(`${this.ApiUrl}/deletecrew_member/${crewId}`,{headers:headers});
  }
  createCrew(crewInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/createcrew`,crewInfo,{headers:headers})
  }

  
  checkExistCrew(crewInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/checkcrew`,crewInfo,{headers:headers})
  }


  crewsMaster(){
    let headers = this.setheaders();
    return this.http.get<Response>(`${this.ApiUrl}/getcrews`,{headers:headers});
  }

  deleteCrew(crewId){
    let headers = this.setheaders();
    return this.http.delete<Response>(`${this.ApiUrl}/deletecrew/${crewId}`,{headers:headers});
  }
  getWellInfo(wellId){
      let headers = this.setheaders();
      return this.http.get<Response>(`${this.ApiUrl}/getwell/${wellId}`,{headers:headers});
  }

  codesMaster(){
    let headers = this.setheaders();
    return this.http.get<Response>(`${this.ApiUrl}/getcodes`,{headers:headers});
  }

  createCode(codeInfo){
    let headers = this.setheaders();

    console.log("codeInfo",codeInfo);
    return this.http.post<Response>(`${this.ApiUrl}/createcode`,codeInfo,{headers:headers})
  }

  deleteCode(codeId){
    let headers = this.setheaders();
    return this.http.delete<Response>(`${this.ApiUrl}/deletecode/${codeId}`,{headers:headers});
  }


  componentsMaster(){
    let headers = this.setheaders();
    return this.http.get<Response>(`${this.ApiUrl}/getcomponents`,{headers:headers});
  }

  createComponent(compInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/createcomponent`,compInfo,{headers:headers})
  }

  deleteComponent(compInfo){
    let headers = this.setheaders();
    return this.http.delete<Response>(`${this.ApiUrl}/deletecomponent/${compInfo}`,{headers:headers});
  }


  positionsMaster(){
    let headers = this.setheaders();
    return this.http.get<Response>(`${this.ApiUrl}/getpositions`,{headers:headers})

  }
  createPosition(positionInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/createposition`,positionInfo,{headers:headers})
  }
  checkExistPosition(positionInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/checkposition`,positionInfo,{headers:headers})
  }
  checkExistCode(codeInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/checkcode`,codeInfo,{headers:headers})

  }

  checkExistComponent(componentInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/checkcomponent`,componentInfo,{headers:headers})
  }

  deletePosition(positionId){
    let headers = this.setheaders();
    return this.http.delete<Response>(`${this.ApiUrl}/deleteposition/${positionId}`,{headers:headers})
  }

  createEquipment(equipmentInfo){
    let headers = this.setheaders();
    return this.http.post<Response>(`${this.ApiUrl}/createequipment`,equipmentInfo,{headers:headers})
  }
  equipments(){
    let headers = this.setheaders();
    return this.http.get<Response>(`${this.ApiUrl}/getequipments`,{headers:headers});
  }
  deleteEquipment(EquipmentId){
    let headers = this.setheaders();
    return this.http.delete<Response>(`${this.ApiUrl}/deleteequipment/${EquipmentId}`,{headers:headers})
  }
  




}
