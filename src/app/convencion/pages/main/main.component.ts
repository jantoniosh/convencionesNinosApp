import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Seccion } from '../../interfaces/seccion.interface';
import { EntradaService } from '../../services/convencion.service';
import { Entrada } from '../../interfaces/entrada.interface';
import { Etiquetas } from '../../interfaces/etiquetas.interface';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  private url: string = environment.urlContenido;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  rutaCEDAW: string = "";
  rutaBDP: string = "";

  portadaCDNSrc: string = "assets/files/cdn/thumb/CDN_Cuadernillo.jpg";
  portadaCDNAlt: string = "portada uno";
  portadaCDPDSrc: string = "assets/files/cdpd/thumb/CDPD_Cuadernillo.jpg";
  portadaCDPDAlt: string = "portada dos";
  descargarSrc: string = "assets/images/descargar.png";
  descargarAlt: string = "descargar";
  compartirSrc: string = "assets/images/compartir.png";
  compartirAlt: string = "compartir";
  verSrc: string = "assets/images/ver.png";
  verAlt: string = "compartir";

  randomN: number[] = []

  etiquetas: string[] = [];

  fuentesA: string[] = [
    '· Observaciones Generales emitidas por el Comité de los Derechos de las Personas con Discapacidad ',
    '· Observaciones Generales emitidas por Comité de los Derechos del Niño',
    '· Observaciones finales realizadas al Estado mexicano, con motivo de sus más recientes informes enviados a ambos comités',
    '· Resolución a comunicaciones individuales del Comité de los Derechos del Niño',
    '· Informes de los Relatores Especiales de Naciones Unidas, aplicables a las convenciones de estudio',
    '-	Informes temáticos de otras oficinas internacionales (como <span class="versalitas">acnudh</span>), relacionados con los derechos desarrollados en ambas convenciones'
  ];

  fuentesB: string[] = [
    '· Sentencias de la Corte Interamericana de Derechos Humanos (con respecto a medidas provisionales, casos contenciosos y Opiniones Consultivas), relacionadas con las disposiciones de las convenciones de derechos de personas con discapacidad y convenciones sobre derechos de la niñez y la adolescencia, siempre que realicen aplicación o interpretación de ese régimen de derechos ',
    '· Informes de la Comisión Interamericana de Derechos Humanos y sus respectivas relatorías'
  ];


  secciones: Seccion[] = [
    {
      titulo: 'Recomendaciones de la semana',
      detalle: true,
      color: 'Azul',
      noElementos: 4,
      boton: true,
      entradas: [],
      descripcion: [
        'En este apartado proponemos contenidos para abundar, desde diferentes ángulos, en el conocimiento de las Convención sobre los Derechos del Niño y Convención sobre los Derechos de las Personas con Discapacidad: videos, documentos e infografías.'
      ]
    },
    {
      titulo: 'Fichas Temáticas',
      detalle: true,
      color: 'Verde',
      noElementos: 4,
      boton: true,
      entradas: [],
      descripcion: []
    },
    {
      titulo: 'Videos',
      detalle: true,
      color: 'Morado',
      noElementos: 4,
      boton: true,
      entradas: [],
      descripcion: []
    },
  ];

  constructor(private entradaService: EntradaService) { }

  ngOnInit(): void {
    this.rutaCEDAW = `${this.url}/assets/files/cedaw/cedaw.pdf`;
    this.rutaBDP = `${this.url}/assets/files/dbp/belemdopara.pdf`;
    const observerEntrada = {
      next: (entradas: Entrada[]) => {
        this.secciones.map(seccion => {
          seccion.entradas = [];
        });
        this.secciones[0].entradas = [];
        this.secciones[0].entradas = this.fisherYatesShuffle(entradas);
        console.log(this.secciones[0].entradas);
        entradas.map(entrada => {
          if (entrada.tipo.includes("Ficha")) {
            this.secciones[1].entradas.push(entrada);
          }
          if (entrada.tipo.includes("Video")) {
            this.secciones[2].entradas.push(entrada);
          }
        });
      },
      error: (err: Error) => {
        this.secciones.map(seccion => {
          seccion.entradas = []
        });
      }
    }

    const observerEtiquetas = {
      next: (etiquetas: Etiquetas[]) => {
        etiquetas.map(etiqueta => {
          this.etiquetas.push(etiqueta.etiqueta);
        });
      },
      error: (err: Error) => {
        this.secciones.map(seccion => {
          seccion.entradas = []
        });
      }
    }

    this.entradaService.getEntradas().subscribe(observerEntrada);
    this.entradaService.getEtiquetas().subscribe(observerEtiquetas);
  }

  getLigaEtiqueta(etiqueta: string): string {
    return `/etiqueta/${etiqueta}`
  }

  getLigaFuente(fuente: string): string {
    return `/fuente/${fuente}`
  }

  randombetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  fisherYatesShuffle(arr: Entrada[]): Entrada[] {
    let arrayAux = arr;
    for (let i = arrayAux.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arrayAux[i], arrayAux[j]] = [arrayAux[j], arrayAux[i]];
    }
    return arrayAux
  }

}
