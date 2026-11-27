# SH · Portafolio profesional (Angular)

Portafolio de **Sharon Huaca**, desarrolladora en formación (Tecnología en Desarrollo de Software y Dispositivos Móviles). Construido con **Angular**, **TypeScript** y **Bootstrap** como proyecto del curso *Desarrollo de páginas con Angular* de la Universidad Austral (Coursera).

> **Entrega 1 · Módulo 1.** Esta versión cubre solo lo visto en el Módulo 1: ecosistema de Angular, componentes y plantillas, Bootstrap, vinculación de datos y TypeScript. Las siguientes entregas amplían el mismo portafolio módulo a módulo.

## Qué contiene

Una SPA de una sola página con las secciones definidas en la arquitectura del portafolio: Portada, Sobre mí, Proyectos, Servicios, Bitácora de ideas y Contacto.

## Cómo ejecutarlo

Requiere Node.js y npm.

```bash
npm install
ng serve
```

Luego abre `http://localhost:4200`.

## Evidencias de la rúbrica del Módulo 1

| # | Requisito | Dónde verlo |
|---|---|---|
| 1 | Paquete npm de Bootstrap instalado | `package.json` → dependencia `bootstrap` |
| 2 | CSS de Bootstrap importado en los estilos globales | `src/styles.scss` → `@use "bootstrap/scss/bootstrap";` |
| 3 | Componente que usa estilos de Bootstrap | `src/app/shared/navbar/navbar.html` (`navbar`, `container`, `nav-link`) y `src/app/secciones/bitacora/bitacora.html` (`row`, `col-lg-7`, `list-group`, `form-control`, `btn btn-primary`) |
| 4 | Sintaxis `{{ }}` con datos de variables TypeScript | `src/app/secciones/portada/portada.html` → `{{ descripcion }}`, `{{ rol }}`; `src/app/shared/idea-item/idea-item.html` → `{{ idea.titulo }}` |
| 5 | Componente contenedor de un listado de objetos (array) visible en el navegador | `src/app/secciones/bitacora/bitacora.ts` → `ideas: Idea[]` (también `proyectos: Proyecto[]` en `secciones/proyectos/proyectos.ts`) |
| 6 | `UL` con `LI` y directiva `ngFor` | `src/app/secciones/bitacora/bitacora.html` → `<li *ngFor="let idea of ideas">` |
| 7 | Uso de `@HostBinding` | `src/app/shared/idea-item/idea-item.ts` y `src/app/shared/proyecto-card/proyecto-card.ts` |
| 8 | Formulario HTML con variables de plantilla `#` | `bitacora.html` → `#titulo` y `#descripcion` |
| 9 | Botón submit que invoca una función de TypeScript | `bitacora.html` → `(click)="agregar($event, titulo, descripcion)"` |
| 10 | Función que agrega el elemento al array y la interfaz se actualiza | `bitacora.ts` → método `agregar()` con `this.ideas.push(...)` |

**Evidencias de TypeScript:** interfaces en `src/app/models/`, clases con propiedades tipadas y arreglos de objetos en cada componente.

> **Nota de versión:** la consigna pide `ngFor`. Angular 22 todavía lo soporta, aunque lo marca como deprecado a favor del bloque `@for`. En el resto de secciones del proyecto uso la sintaxis moderna `@for`, por lo que se pueden comparar ambas.

## Estructura

```text
src/app/
├── app.ts / app.html           # componente raíz: junta las secciones
├── models/                     # interfaces de TypeScript
├── shared/                     # navbar, footer y componentes reutilizables
│   ├── idea-item/              # usa @Input y @HostBinding
│   └── proyecto-card/          # usa @Input y @HostBinding
└── secciones/                  # portada, sobre-mi, proyectos, servicios, bitacora
```

## Identidad visual

Paleta del documento de diseño del portafolio: espacio profundo `#090A16`, violeta `#7626C9`, magenta `#E349FF`, turquesa `#28D9F2`, lavanda `#BCA6FF` y blanco holográfico `#F3EDFF`. Tipografías: Space Grotesk, Manrope y JetBrains Mono.

## Hoja de ruta por módulos

1. **Módulo 1 (esta entrega):** componentes, plantillas, Bootstrap y TypeScript.
2. **Módulo 2:** rutas, formularios con validaciones y estado con Redux (NgRx).
3. **Módulo 3:** servicios, inyección de dependencias y consumo de una API.
4. **Módulo 4:** componentes avanzados, animaciones, pruebas automatizadas y trabajo final.
