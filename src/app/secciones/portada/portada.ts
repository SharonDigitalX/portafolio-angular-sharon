import { Component } from '@angular/core';

@Component({
  selector: 'app-portada',
  imports: [],
  templateUrl: './portada.html',
  styleUrl: './portada.scss',
})
export class Portada {
  // Variables de TypeScript que la plantilla muestra con la sintaxis {{ }}
  marca = 'SH · Portafolio';
  rol = 'Sharon Huaca · Desarrollo de software';
  descripcion =
    'Diseño y desarrollo de experiencias digitales que combinan creatividad, tecnología y propósito.';

  identificadores: string[] = ['Desarrollo en formación', 'Innovación con propósito'];
}
