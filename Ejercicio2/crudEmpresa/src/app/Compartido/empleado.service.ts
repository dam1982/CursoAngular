import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import  {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  list: Empleado[];
  formData = new Empleado
readonly rootUrl ='http://localhost:58360/api';

   constructor(private http: HttpClient) {  }

  postempleado(formData: Empleado){

  return  this.http.post(this.rootUrl+'/Empleado',formData);
  }


  refreshEmpleado(){
    this.http.get(this.rootUrl+'/Empleado').toPromise().then(res=>this.list = res as Empleado[]);
    

  }

}
