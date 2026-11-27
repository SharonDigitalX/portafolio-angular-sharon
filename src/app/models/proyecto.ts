// Interfaz: describe la forma que debe tener cada proyecto
export interface Proyecto {
  id: number;
  categoria: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  tecnologias: string[];
  imagen: string;
}
