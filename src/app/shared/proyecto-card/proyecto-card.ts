import { Component, HostBinding, Input } from '@angular/core';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-proyecto-card',
  imports: [],
  templateUrl: './proyecto-card.html',
  styleUrl: './proyecto-card.scss',
})
export class ProyectoCard {
  // @Input: el componente padre (Proyectos) le entrega cada proyecto
  @Input({ required: true }) proyecto!: Proyecto;

  // @HostBinding: asigna clases a la etiqueta <app-proyecto-card> misma
  @HostBinding('attr.class') cssClass = 'proyecto-card d-block';
}
