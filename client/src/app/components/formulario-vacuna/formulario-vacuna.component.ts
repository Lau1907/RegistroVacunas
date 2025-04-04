import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VacunasService } from '../../services/vacuna.service';

@Component({
  selector: 'app-formulario-vacuna',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './formulario-vacuna.component.html',
  styleUrl: './formulario-vacuna.component.css'
})
export class FormularioVacunaComponent {
  vacunaForm: FormGroup;

  constructor(private fb: FormBuilder, private vacunaService: VacunasService) {
    // Inicializamos el formulario con validaciones
    this.vacunaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      dosis_recomendadas: ['', Validators.required],
      especies_aplicables: ['', Validators.required]
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.vacunaForm.valid) {
      this.vacunaService.createVacuna(this.vacunaForm.value).subscribe(
        (response) => {
          console.log('Vacuna agregada', response);
          // Puedes redirigir o mostrar una notificación de éxito
        },
        (error) => {
          console.error('Error al agregar vacuna', error);
          // Mostrar un error al usuario
        }
      );
    }
  }
}
