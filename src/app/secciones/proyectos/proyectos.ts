import { Component } from '@angular/core';
import { Proyecto } from '../../models/proyecto';
import { ProyectoCard } from '../../shared/proyecto-card/proyecto-card';

@Component({
  selector: 'app-proyectos',
  imports: [ProyectoCard],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
})
export class Proyectos {
  // Arreglo de objetos: cada elemento cumple la interfaz Proyecto
  proyectos: Proyecto[] = [
    {
      id: 1,
      categoria: 'Bienestar · Web',
      titulo: 'NEXXA-VIDA',
      subtitulo: 'Tecnología para una vida más consciente.',
      descripcion:
        'Ecosistema digital de bienestar que conecta autoconocimiento, hábitos y acciones diarias mediante experiencias interactivas, seguimiento y gamificación, con una identidad visual futurista propia.',
      tecnologias: ['PHP', 'HTML', 'Gamificación'],
      imagen: '/img/nexxa-vida.webp',
    },
    {
      id: 2,
      categoria: 'Investigación · IA',
      titulo: 'Madurez',
      subtitulo: 'Inteligencia que observa, tecnología que aprende.',
      descripcion:
        'Proyecto tecnológico e investigativo que explora la visión artificial y el análisis de imágenes para identificar estados de madurez de plantas aromáticas, en el Valle del Cauca.',
      tecnologias: ['Python', 'Visión artificial'],
      imagen: '/img/madurez.webp',
    },
    {
      id: 3,
      categoria: 'Videojuego · Educación',
      titulo: 'CODEQuest',
      subtitulo: 'Aprender jugando. Construir pensando.',
      descripcion:
        'Videojuego educativo para enseñar de forma lógica, divertida y creativa programación y bases de datos básicas, y desarrollar el pensamiento lógico de quienes se apasionan por el universo digital.',
      tecnologias: ['Videojuego', 'Bases de datos'],
      imagen: '/img/codequest.webp',
    },
    {
      id: 4,
      categoria: 'Portafolio · Angular',
      titulo: 'Portafolio SH Angular',
      subtitulo: 'Una experiencia en construcción.',
      descripcion:
        'Proyecto tecnológico de desarrollo profesional en construcción: mi portafolio, creado con Angular, TypeScript y Bootstrap, que crece con cada módulo del curso.',
      tecnologias: ['Angular', 'TypeScript', 'Bootstrap'],
      imagen: '/img/portada.webp',
    },
  ];
}
