import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Idea } from '../../models/idea';
import { IdeaItem } from '../../shared/idea-item/idea-item';

@Component({
  selector: 'app-bitacora',
  imports: [NgFor, IdeaItem],
  templateUrl: './bitacora.html',
  styleUrl: './bitacora.scss',
})
export class Bitacora {
  // Arreglo (array) de objetos que se muestra en pantalla
  ideas: Idea[] = [
    {
      id: 1,
      titulo: 'Portafolio con identidad propia',
      descripcion: 'Un portafolio inmersivo y futurista, hecho con Angular, que refleje mi sello creativo.',
    },
    {
      id: 2,
      titulo: 'Madurez para más especies',
      descripcion: 'Llevar el análisis de madurez con visión artificial a otras plantas aromáticas.',
    },
    {
      id: 3,
      titulo: 'NEXXA-VIDA adaptativo',
      descripcion: 'Una experiencia de bienestar que se ajuste progresivamente a cada perfil.',
    },
    {
      id: 4,
      titulo: 'CODEQuest con más mundos',
      descripcion: 'Ampliar el videojuego con nuevos retos de programación y bases de datos.',
    },
  ];

  // Se ejecuta al hacer clic en el boton "submit" del formulario.
  // Recibe los <input> gracias a las variables de plantilla (#titulo y #descripcion).
  agregar(evento: Event, titulo: HTMLInputElement, descripcion: HTMLInputElement) {
    evento.preventDefault(); // evita que el formulario recargue la pagina

    const textoTitulo = titulo.value.trim();
    const textoDescripcion = descripcion.value.trim();

    if (!textoTitulo) {
      titulo.focus();
      return;
    }

    // Se agrega el nuevo objeto al array: la pantalla se actualiza sola
    this.ideas.push({
      id: this.ideas.length + 1,
      titulo: textoTitulo,
      descripcion: textoDescripcion || 'Sin descripción por ahora.',
    });

    titulo.value = '';
    descripcion.value = '';
    titulo.focus();
  }
}
