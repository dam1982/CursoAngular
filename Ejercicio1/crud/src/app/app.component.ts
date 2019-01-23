import { Component } from '@angular/core';

import{Employee} from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  Employearray: Employee[] = [
  {id: 1,nombre :"diego",country :"bogota"},
  {id: 2,nombre :"maria",country :"medellin"},
  {id: 3,nombre :"marta",country :"calñi"}

  ];

selectEmployee: Employee = new Employee();

employeeOfEdit(employee: Employee){
  this.selectEmployee = employee;

}

  addOrEdit(){

    if(this.selectEmployee.id == 0){
this.selectEmployee.id = this.Employearray.length + 1;
this.Employearray.push(this.selectEmployee);
}  
this.selectEmployee = new Employee;

}

delete(){
  if(confirm("esta seguro de eliminar el dato")){
  this.Employearray = this.Employearray.filter(x => x != this.selectEmployee)
  this.selectEmployee = new Employee();
}
}

}
