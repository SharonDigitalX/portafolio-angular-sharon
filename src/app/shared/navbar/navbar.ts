import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  // Datos que se muestran en la plantilla con {{ }}
  marca = 'SH';
  detalle = 'Portafolio';
}
