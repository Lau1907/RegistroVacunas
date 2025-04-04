// propietario.model.ts
export interface Mascota {
    _id: string;
    nombre: string;
    especie: string;
    raza: string;
    edad: number;
    peso: number;
    sexo: string;
    fecha_nacimiento: Date;
    estatus: string;
  }
  
  export interface Propietario {
    _id: string;
    nombre: string;
    ApeP: string;
    ApeM: string;
    telefono: string;
    email: string;
    direccion: string;
    mascotas: Mascota[]; // Lista de mascotas asociadas al dueño
  }
  