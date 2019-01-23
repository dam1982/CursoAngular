import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Form} from '@angular/forms'
import{EmpleadoModel} from './empleado-model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServiceService {

  empleado= new EmpleadoModel;
  url:string ='http://localhost:58360/api';
  list: EmpleadoModel[];

  constructor(private http: HttpClient) { }

  PostEmpleado(empleado: EmpleadoModel){

   return this.http.post(this.url+'/Empleado',empleado);
  }

  GetEmpleados(){

  return  this.http.get(this.url+'/Empleado').toPromise();
  }

  PutEmpleados(empleado: EmpleadoModel){

    return this.http.put(this.url+'/Empleado/'+ empleado.Id,empleado);
    }

    DeleteEmpleados(id:number){

      return this.http.delete(this.url+'/Empleado/'+id);

    }

    

    GetEmpleadoId(empleado: EmpleadoModel){
      return  this.http.get(this.url+'/Empleado/'+empleado.Id);

    }

  



}
