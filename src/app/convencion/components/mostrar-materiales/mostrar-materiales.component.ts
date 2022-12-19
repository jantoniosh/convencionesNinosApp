import { Component, Input, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../../environments/environment.prod';
import { MatDialog } from '@angular/material/dialog';
import { Seccion } from '../../interfaces/seccion.interface';
import { DialogImagenComponent } from '../dialog-imagen/dialog-imagen.component';

@Component({
  selector: 'app-mostrar-materiales',
  templateUrl: './mostrar-materiales.component.html'
})
export class MostrarMaterialesComponent {

  private url: string = environment.urlContenido;
  descargarSrc: string = "assets/images/descargar.png";
  compartirSrc: string = "assets/images/compartir.png";
  verSrc: string = "assets/images/ver.png";
  escucharSrc: string = "assets/images/escuchar.png";

  urlBocina: string = "assets/images/bocina.svg";
  urlFicha: string = "assets/images/ficha.svg";

  hayError: boolean = false;
  termino: string = "";

  sonido = faVolumeUp;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;

  @Input() seccion: Seccion = {
    titulo: '',
    detalle: false,
    color: '',
    noElementos: 0,
    boton: false,
    entradas: [],
    descripcion: []
  }

  constructor(public dialog: MatDialog) { }

  mostrarDialog(ruta: string): void {
    let rutaCorregida = ruta.replace('infograficos/', 'infograficos/images/');
    console.log(rutaCorregida);
    this.dialog
      .open(DialogImagenComponent, {
        data: rutaCorregida
      })
  }

  getClassOf() {
    if (this.seccion.color === "Verde") {
      return "block-content multiple materiales home";
    }
    else if (this.seccion.color === "Morado") {
      return "block-content materiales podcast home";
    }
    else if (this.seccion.color === "Azul") {
      return "block-content materiales info home";
    }
    return "";
  }

  getRutaConvencion(convencion: string) {
    if (convencion == "CDN") {
      return "/cdn";
    }
    else if (convencion == "CDPD") {
      return "/cdpd";
    }
    return "";
  }

  getRutaCategoria(categoria: string) {
    let cat: string = categoria.toLowerCase();
    if (cat == "podcast") {
      return "/categoria/podcast";
    }
    else if (cat == "artículo") {
      return "/categoria/articulo";
    }
    else if (cat == "ficha") {
      return "/categoria/ficha";
    }
    return "";
  }

  getRutaRedes(ruta: string) {
    return `${this.url}/${ruta}`;
  }

  aumentar() {
    this.seccion.noElementos += 4;
  }

  getLogoVista(categoria: string) {
    if (categoria == "Podcast") {
      return this.escucharSrc;
    }
    else {
      return this.verSrc
    }
  }

  getThumb(ruta: string) {
    return ruta.replace('.jpg', 'thumb.jpg');
  }

  getThumbFicha(ruta: string) {
    let rutaCorregida = ruta.replace('infograficos/', 'infograficos/thumb/');
    rutaCorregida = rutaCorregida.replace('.jpg', 'thumb.jpg');
    return rutaCorregida;
  }
}

