import { Component, OnInit } from '@angular/core';
import{ EmpleadoService} from '../../Compartido/empleado.service';
import { NgForm } from '@angular/forms';
import { Subscription, Subscriber } from 'rxjs';
// import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/Compartido/empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(private service: EmpleadoService /*,private toastr: ToastrService*/) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm){
    if(form != null)

    form.resetForm();

    
    this.service.formData = {
          Id : null,
          Nombre : '',
          Cargo: ''

    }

  }

  
  onSubmit(form: NgForm){
  
    this.insertRecord(form);
    
  }

  insertRecord(form:NgForm){
    this.service.postempleado(form.value).subscribe(res => {    
    //  this.toastr.success('Hello world!', 'Toastr fun!');
    this.resetForm(form);

    

    });    

  }


}
