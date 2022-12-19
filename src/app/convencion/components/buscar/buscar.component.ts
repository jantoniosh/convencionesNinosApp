import { Component, OnInit } from '@angular/core';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Entrada } from '../../interfaces/entrada.interface';
import { EntradaService } from '../../services/convencion.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  menu: boolean = false;
  angleDown = faAngleDown;
  entradasCdn: Entrada[] = [];
  entradasCdpd: Entrada[] = [];
  entradasVideo: Entrada[] = [];
  entradasFichero: Entrada[] = [];
  urlBocina: string = "assets/images/bocina.svg";
  urlFicha: string = "assets/images/ficha.svg";
  cdnMenu: boolean = false;
  cdpdMenu: boolean = false;
  videosMenu: boolean = false;
  ficheroMenu: boolean = false;

  constructor(private entradaService: EntradaService) { }

  ngOnInit(): void {
    const observerEntrada = {
      next: (entradas: Entrada[]) => {
        this.entradasCdn = [];
        this.entradasCdpd = [];
        this.entradasVideo = [];
        this.entradasFichero = [];
        entradas.map(entrada => {
          if ("Artículo".indexOf(entrada.tipo) === 0) {
            if (entrada.convencion.includes("CDN")) {
              this.entradasCdn.push(entrada);
            }
            else if (entrada.convencion.includes("CDPD")) {
              this.entradasCdpd.push(entrada);
            }
          }
          else if ("Video".indexOf(entrada.tipo) === 0) {
            this.entradasVideo.push(entrada);
          }
          else if ("Ficha".indexOf(entrada.tipo) === 0) {
            this.entradasFichero.push(entrada);
          }
        });
      },
      error: (err: Error) => {
        this.entradasCdn = [];
        this.entradasCdpd = [];
        this.entradasVideo= [];
        this.entradasFichero = [];
      }
    }
    this.entradaService.getEntradas().subscribe(observerEntrada);
  }

  mostrarMenu(): void {
    const bodyElement = document.body;
    if (bodyElement) {
      bodyElement.classList.toggle("menuactive");
    }
    this.cdnMenu = false;
    this.cdpdMenu = false;
    this.videosMenu = false;
    this.ficheroMenu = false;
  }

  showCdn(): void {
    this.cdnMenu = !this.cdnMenu;
    this.cdpdMenu = false;
    this.videosMenu = false;
    this.ficheroMenu = false;
  }

  showCedaw(): void {
    this.cdnMenu = false;
    this.cdpdMenu = !this.cdpdMenu;
    this.videosMenu = false;
    this.ficheroMenu = false;
  }

  showVideos(): void {
    this.cdnMenu = false;
    this.cdpdMenu = false;
    this.videosMenu = !this.videosMenu;
    this.ficheroMenu = false;
  }

  showFichero(): void {
    this.cdnMenu = false;
    this.cdpdMenu = false;
    this.videosMenu = false;
    this.ficheroMenu = !this.ficheroMenu;
  }
}

