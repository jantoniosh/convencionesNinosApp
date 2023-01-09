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
    `La Convención sobre los Derechos del Niño es la carta internacional por los derechos de niñas, niños y adolescentes, adoptada por unanimidad en la Asamblea General de las Naciones Unidas el 20 de noviembre de 1989 y entró en vigor el 2 de septiembre de 1990.`,
    `Su ratificación implica el compromiso de cada país para reconocer todas aquellas expresiones que discriminan a las personas menores de edad y adoptar las medidas necesarias y urgentes para garantizar la igualdad sustantiva, a través de reformas a marcos jurídicos nacionales, institucionales, de política pública y decisiones judiciales, a fin de acelerar y hacer realidad los cambios sociales y culturales para eliminar los prejuicios y estereotipos con los que se discrimina a niñas, niños y adolescentes.`
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
