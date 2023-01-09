import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../interfaces/entrada.interface';
import { Seccion } from '../../interfaces/seccion.interface';
import { EntradaService } from '../../services/convencion.service';

@Component({
  selector: 'app-cdpd',
  templateUrl: './cdpd.component.html'
})
export class CdpdComponent implements OnInit {

  clase: string = "block-top-content cedaw convencion";
  titulo: string = "";
  subtitulo: string = "Convención sobre los Derechos de las Personas con Discapacidad";
  imagenUrl: string = "assets/files/cdpd/thumb/CDPD_Cuadernillo.jpg";
  imagenAlt: string = "portada dos";
  descripciones: string[] = [
    `La Convención sobre los Derechos de las Personas con Discapacidad es la carta internacional por los derechos de las personas con discapacidad, adoptada por unanimidad en la Asamblea General de las Naciones Unidas el 13 de diciembre de 2006.`,
    `Entró en vigor en 2007 y ha sido ratificada por 185 países, lo cual implica el compromiso de cada país a reconocer aquellas expresiones que discriminan a las personas con discapacidad y adoptar las medidas necesarias y urgentes para garantizar la igualdad sustantiva, a través de reformas a marcos jurídicos nacionales, institucionales, de política pública y decisiones judiciales, a fin de acelerar y hacer realidad los cambios sociales y culturales para eliminar los prejuicios y estereotipos con los que se discrimina a las personas con discapacidad.`
  ];
  archivo: string = 'assets/files/cdpd/CDPD_Cuadernillo.pdf';
  convencion: string = "CDPD";

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
          if (entrada.convencion.includes("CDPD")) {
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
