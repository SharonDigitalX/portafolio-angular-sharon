import { Component } from '@angular/core';
import { Servicio } from '../../models/servicio';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class Servicios {
  // El nivel es honesto: no hay barras de progreso falsas
  servicios: Servicio[] = [
    {
      numero: '01',
      titulo: 'Desarrollo web',
      descripcion: 'Construcción de interfaces y funcionalidades web, explorando tecnologías modernas.',
      nivel: 'Aplicado en proyectos',
      tono: 'cyan',
    },
    {
      numero: '02',
      titulo: 'Diseño de experiencias digitales',
      descripcion: 'Interfaces visuales, prototipos, estructura y experiencia de usuario.',
      nivel: 'Aplicado en proyectos',
      tono: 'cyan',
    },
    {
      numero: '03',
      titulo: 'Exploración de inteligencia artificial',
      descripcion: 'Proyectos académicos de IA y experimentación con visión artificial.',
      nivel: 'En exploración',
      tono: 'magenta',
    },
    {
      numero: '04',
      titulo: 'Soluciones orientadas a datos',
      descripcion: 'Diseño de bases de datos, lógica y análisis en proceso de formación.',
      nivel: 'En desarrollo',
      tono: 'lavender',
    },
  ];
}
