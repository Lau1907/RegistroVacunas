import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioVacunaComponent } from './components/formulario-vacuna/formulario-vacuna.component'; // Asegúrate de que esta ruta sea correcta
import { PropietariosComponent } from './components/propietarios/propietarios.component';

export const routes: Routes = [
  { path: '', redirectTo: '/vacunas', pathMatch: 'full' },  // Redirige la ruta principal a los propietarios (si es necesario)
  { path: 'propietarios', component: PropietariosComponent },  // Ruta para PropietariosComponent
  { path: 'vacunas', component: FormularioVacunaComponent },   // Ruta para el formulario de vacunas
  // Otras rutas pueden ir aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
