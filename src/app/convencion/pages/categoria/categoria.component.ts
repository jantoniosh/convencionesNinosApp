import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entrada } from '../../interfaces/entrada.interface';
import { Seccion } from '../../interfaces/seccion.interface';
import { EntradaService } from '../../services/convencion.service';

@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {

    slug: string | null = "";
    seccion: Seccion = {
        titulo: '',
        detalle: true,
        color: 'Verde',
        noElementos: 4,
        boton: true,
        entradas: [],
        descripcion: []
    };
    tipo: string = "";

    constructor(private entradaService: EntradaService, private route: ActivatedRoute) { }

    ngOnInit(): void {

        this.route.params.subscribe(routeParams => {
            this.slug = routeParams["slug"];
            const observerEntrada = {
                next: (entradas: Entrada[]) => {
                    this.seccion.entradas = [];
                    entradas.map(entrada => {
                        if (this.tipo.indexOf(entrada.tipo) === 0) {
                            this.seccion.entradas.push(entrada);
                        }
                    });
                    this.hideBarra();
                },
                error: (err: Error) => {
                    this.seccion.entradas = [];
                    this.hideBarra();
                }
            }
            if (this.slug !== null) {
                this.hideBarra();
                if (this.slug === "video") {
                    this.seccion.titulo = "Vídeos";
                    this.tipo = "Video";
                    this.seccion.descripcion = [''];
                }
                else if (this.slug === "articulo") {
                    this.seccion.titulo = "Artículos";
                    this.tipo = "Artículo";
                    this.seccion.descripcion = ['Cada uno de los artículos de las convenciones <span class="versalitas">cedaw</span> y <span class="versalitas">bdp</span> han sido ampliados y comentados bajo la metodología del desempaque de derechos, lo que nos permite no sólo analizar con profundidad el texto de cada Convención, sino <span class="resaltado">acercarnos a mayor detalle a la jurisprudencia, a los instrumentos y a las fuentes</span> que tocan estos temas, así como acceder a citas que nos da recursos y elementos para sustentar nuestros propios casos.'];
                }
                else if (this.slug === "ficha") {
                    this.seccion.titulo = "Fichas";
                    this.tipo = "Ficha";

                    this.seccion.descripcion = ['Esta serie de infografías nos permite acceder de manera pedagógica al contenido más relevante'];
                }
                this.entradaService.getEntradas().subscribe(observerEntrada);
            }
        });
    }

    hideBarra(): void {
        window.scroll(0, 0);
        const bodyElement = document.body;
        bodyElement.classList.remove('menuactive');
    }
}
