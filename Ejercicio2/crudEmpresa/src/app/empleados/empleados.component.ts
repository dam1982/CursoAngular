import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../Compartido/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private service: EmpleadoService) { }

  ngOnInit() {

    this.service.refreshEmpleado();
  }

}
