import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './convencion/pages/busqueda/busqueda.component';
import { CategoriaComponent } from './convencion/pages/categoria/categoria.component';
import { CdnComponent } from './convencion/pages/cdn/cdn.component';
import { CdpdComponent } from './convencion/pages/cdpd/cdpd.component';
import { CreditosComponent } from './convencion/pages/creditos/creditos.component';
import { EntradaComponent } from './convencion/pages/entrada/entrada.component';
import { EtiquetaComponent } from './convencion/pages/etiqueta/etiqueta.component';
import { GlosarioComponent } from './convencion/pages/glosario/glosario.component';
import { MainComponent } from './convencion/pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'cdn',
    component: CdnComponent
  },
  {
    path: 'cdpd',
    component: CdpdComponent
  },
  {
    path: 'categoria/:slug',
    component: CategoriaComponent
  },
  {
    path: 'video/:slug',
    component: EntradaComponent
  },
  {
    path: 'articulo/:slug',
    component: EntradaComponent
  },
  {
    path: 'ficha/:slug',
    component: EntradaComponent
  },
  {
    path: 'creditos',
    component: CreditosComponent
  },
  {
    path: 'busqueda',
    component: BusquedaComponent
  },
  {
    path: 'etiqueta/:slug',
    component: EtiquetaComponent
  },
  {
    path: 'glosario',
    component: GlosarioComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
