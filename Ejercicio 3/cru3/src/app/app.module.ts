import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { ListEmpleadosComponent } from './empleados/list-empleados/list-empleados.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

//--------------------------------Servicios------------------------------

import {EmpleadoServiceService} from './compartido/empleado-service.service';



@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ListEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpleadoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
