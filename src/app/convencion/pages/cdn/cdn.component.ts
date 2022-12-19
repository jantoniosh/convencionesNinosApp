import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../interfaces/entrada.interface';
import { Seccion } from '../../interfaces/seccion.interface';
import { EntradaService } from '../../services/convencion.service';

@Component({
  selector: 'app-cdn',
  templateUrl: './cdn.component.html'
})
export class CdnComponent implements OnInit {


  clase: string = "block-top-content belem convencion";
  titulo: string = "Convención sobre los Derechos del Niño";
  subtitulo: string = "";
  imagenUrl: string = "assets/files/cdn/thumb/CDN_Cuadernillo.jpg";
  imagenAlt: string = "portada uno";
  descripciones: string[] = [
    `Esta convención se refiere a los derechos de niños, niñas, niñes y adolescentes. Se respeta el título de la Convención por ser de carácter oficial, mas se hace esta aclaración con el propósito de plantear un cambio incluyente en el lenguaje. (Nota del equipo editorial).`,
  ];
  archivo: string = 'assets/files/cdn/CDN_Cuadernillo.pdf';
  convencion: string = "Belém do Pará";

  secciones: Seccion[] = [
    {
      titulo: 'Artículos',
      detalle: false,
      color: 'Verde',
      noElementos: 4,
      boton: true,
      entradas: [],
      descripcion: []
    },
    {
      titulo: 'Vídeos',
      color: 'Morado',
      detalle: false,
      noElementos: 4,
      boton: true,
      entradas: [],
      descripcion: []
    },
    {
      titulo: 'Fichas',
      detalle: false,
      color: 'Azul',
      noElementos: 4,
      boton: true,
      entradas: [],
      descripcion: []
    }
  ];

  constructor(private entradaService: EntradaService) { }

  ngOnInit(): void {
    const observerEntrada = {
      next: (entradas: Entrada[]) => {
        this.secciones.map(seccion => {
          seccion.entradas = []
        });
        entradas.map(entrada => {
          if (entrada.convencion.includes("CDN")) {
            if ("Artículo".indexOf(entrada.tipo) >= 0) {
              this.secciones[0].entradas.push(entrada);
            }
            else if ("Video".indexOf(entrada.tipo) >= 0) {
              this.secciones[1].entradas.push(entrada);
            }
            else if ("Ficha".indexOf(entrada.tipo) >= 0) {
              this.secciones[2].entradas.push(entrada);
            }
          }
        });
      },
      error: (err: Error) => {
        this.secciones[0].entradas = [];
      }
    }
    this.entradaService.getEntradas().subscribe(observerEntrada);
  }


}
