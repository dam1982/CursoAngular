import { Component, OnInit } from '@angular/core';
import{EmpleadoModel} from '../../compartido/empleado-model';
import{EmpleadoServiceService} from '../../compartido/empleado-service.service'

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {
 
  users: any;
  constructor(private servicio:EmpleadoServiceService ) {
   
    this.users =[];
   }

  ngOnInit() {

this.servicio.GetEmpleados().then((result: any) =>{
this.users = result;
}).catch (err => console.log('error',err));

  }


  populateForm(item: EmpleadoModel){
    this.servicio.empleado = Object.assign({},item)
  }

  EliminarEmpleado(id: number){

    if(confirm('Esta seguro que quiere eliminar este archivo')){
  this.servicio.DeleteEmpleados(id).subscribe(res => {
    alert("Se An Eliminado los datos exitosamente Los Datos");
    location.reload()
    
  });
}
}



}
