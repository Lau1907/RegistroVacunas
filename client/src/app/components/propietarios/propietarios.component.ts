import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Propietario } from '../../interfaces/propietarios';

@Component({
  selector: 'app-propietarios',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './propietarios.component.html',
  styleUrl: './propietarios.component.css'
})
export class PropietariosComponent {

  propietarios: Propietario[] = [];
}
