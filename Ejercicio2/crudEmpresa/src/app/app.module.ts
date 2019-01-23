import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule }from '@angular/forms'
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { EmpleadosComponent } from './empleados/empleados.component';
// import { EmpleadosListComponent } from './Empleados/empleados-list/empleados-list.component';
import{EmpleadoService} from './Compartido/empleado.service';
import  {HttpClientModule} from '@angular/common/http';
//import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
// import { ToastrModule } from 'ngx-toastr';
import { EmpleadoListComponent } from './empleados/empleado-list/empleado-list.component';

//-----------------------Servicios  //------------------------




@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    EmpleadosComponent,
    EmpleadoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
   // BrowserAnimationsModule,
  //  ToastrModule.forRoot(),
   // CommonModule

  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
