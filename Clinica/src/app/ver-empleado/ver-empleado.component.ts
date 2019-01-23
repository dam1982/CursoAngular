import { Component, OnInit } from '@angular/core';
import  {SEmpleadosService  } from '../sempleados.service'
@Component({
  selector: 'app-ver-empleado',
  templateUrl: './ver-empleado.component.html',
  styleUrls: ['./ver-empleado.component.css']
})
export class VerEmpleadoComponent implements OnInit {
  users: any;
  constructor(private restpaciente:SEmpleadosService) { this.users =[];}
  
  ngOnInit() {
  
  this.restpaciente.getData().then((result: any) =>{  
    this.users = result;
    }).catch (err => console.log('error',err));
    
  }

 

}
