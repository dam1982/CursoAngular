import { Component, OnInit } from '@angular/core';
import{EmpleadoServiceService} from   '../../compartido/empleado-service.service';
import{HttpClient} from '@angular/common/http';
import{NgForm} from '@angular/forms'
import{EmpleadoModel} from '../../compartido/empleado-model'


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  emplead = EmpleadoModel;

  constructor(private empleadoserv: EmpleadoServiceService) { }

  ngOnInit() {
   
    this.resetForm();
  }

  resetForm(form?:NgForm){ //metodo para limpiar el formulario sngular/forms
    if(form != null){
      form.resetForm();

      this.empleadoserv.empleado ={
        Id: null,
        Nombre: '',
        Cargo:''
      }
    }
  }


  insertarDatos(form:NgForm){

    this.empleadoserv.PostEmpleado(form.value).subscribe(res => {
      alert("Se An Insertado Los Datos");
      location.reload();
      this.resetForm(form)});
  }

 ModificarEmpleado(form:NgForm){

    this.empleadoserv.PutEmpleados(form.value).subscribe(res => {
      alert("Se An Modificado los datos exitosamente Los Datos");
      location.reload();
      
      this.resetForm(form)});
  }


  
  users: EmpleadoModel;

  verEmpleadoXId(form:NgForm){
   

    this.empleadoserv.GetEmpleadoId(form.value).subscribe ((res: EmpleadoModel) =>  {
     
        this.users = res;

      location.reload();
      
      this.resetForm(form)});

      console.log(this.users );

  }
 
  populateForm(item: EmpleadoModel){
    this.empleadoserv.empleado = Object.assign({},item)
    
  }


}
