import { Component, HostBinding, Input } from '@angular/core';
import { Idea } from '../../models/idea';

@Component({
  selector: 'app-idea-item',
  imports: [],
  templateUrl: './idea-item.html',
  styleUrl: './idea-item.scss',
})
export class IdeaItem {
  // Dato que recibe del componente padre (la bitacora)
  @Input({ required: true }) idea!: Idea;

  // @HostBinding: asigna clases CSS a la etiqueta <app-idea-item> misma
  @HostBinding('attr.class') cssClass = 'idea-item d-block';
}
