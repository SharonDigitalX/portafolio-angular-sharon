import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { Portada } from './secciones/portada/portada';
import { SobreMi } from './secciones/sobre-mi/sobre-mi';
import { Proyectos } from './secciones/proyectos/proyectos';
import { Servicios } from './secciones/servicios/servicios';
import { Bitacora } from './secciones/bitacora/bitacora';

// Componente raiz: junta todas las secciones del portafolio (SPA)
@Component({
  selector: 'app-root',
  imports: [Navbar, Portada, SobreMi, Proyectos, Servicios, Bitacora, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
