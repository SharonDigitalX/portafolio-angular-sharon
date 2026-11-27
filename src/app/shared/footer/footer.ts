import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  autora = 'Sharon Huaca';
  anio = new Date().getFullYear();

  // CAMBIA este correo por el tuyo
  correo = 'sharondigital93@gmail.com';
}
