import { Component } from '@angular/core';
import { Dato } from '../../models/dato';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.scss',
})
export class SobreMi {
  nombre = 'Sharon Huaca';
  rol = 'Desarrolladora en formación';
  carrera = 'Tecnología en Desarrollo de Software y Dispositivos Móviles · 3.er semestre';

  declaracion =
    'No solo aprendo a desarrollar tecnología. Exploro ideas, diseño soluciones y construyo experiencias que puedan evolucionar.';

  parrafo =
    'Mi meta es ser Ingeniera de Sistemas y especializarme en inteligencia artificial, análisis de datos y desarrollo creativo. Soy creativa, curiosa e inconformista: me apasionan los retos, aprendo de mis errores y llevo cada idea más allá de lo evidente.';

  datos: Dato[] = [
    { valor: '03', etiqueta: 'Semestre' },
    { valor: '04', etiqueta: 'Proyectos' },
    { valor: 'IA', etiqueta: 'Foco de estudio' },
  ];
}
