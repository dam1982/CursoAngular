import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerEmpleadoComponent } from './ver-empleado/ver-empleado.component';
import {RegistrarPacienteComponent} from './registrar-paciente/registrar-paciente.component'


@NgModule({
  declarations: [
    AppComponent,
    VerEmpleadoComponent,
    RegistrarPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
