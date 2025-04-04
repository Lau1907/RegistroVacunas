import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormularioVacunaComponent } from './components/formulario-vacuna/formulario-vacuna.component';
import { PropietariosComponent } from './components/propietarios/propietarios.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioVacunaComponent,
    PropietariosComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
