import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class SEmpleadosService {

  private headers = new Headers({'content-type':'aplication/json'})

//  baseUrl ="https://jsonplaceholder.typicode.com/posts";

  constructor(private _Http:HttpClient) { }

  getData(){
   return this._Http.get("/api/Paciente").toPromise();
  }

addPaciente(paciente: SEmpleadosService){

  let ijson = JSON.stringify(paciente);
 return this._Http.post("/api/Paciente",ijson).toPromise
 
}
   
}
