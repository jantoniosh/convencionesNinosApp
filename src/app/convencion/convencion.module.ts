import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarmenuComponent } from './components/sidebarmenu/sidebarmenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BuscarComponent } from './components/buscar/buscar.component';
import { RouterModule } from '@angular/router';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FooterComponent } from './components/footer/footer.component';
import { VerdescargarcompartirComponent } from './components/verdescargarcompartir/verdescargarcompartir.component';
import { ShareButtonModule } from 'ngx-sharebuttons/button';
import { MostrarMaterialesComponent } from './components/mostrar-materiales/mostrar-materiales.component';
import { DialogImagenComponent } from './components/dialog-imagen/dialog-imagen.component';
import { DescripcionConvencionComponent } from './components/descripcion-convencion/descripcion-convencion.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { EntradaComponent } from './pages/entrada/entrada.component';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { EtiquetaComponent } from './pages/etiqueta/etiqueta.component';
import { CdnComponent } from './pages/cdn/cdn.component';
import { CdpdComponent } from './pages/cdpd/cdpd.component';
import { GlosarioComponent } from './pages/glosario/glosario.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    HeaderComponent,
    SidebarmenuComponent,
    BuscarComponent,
    BuscadorComponent,
    FooterComponent,
    VerdescargarcompartirComponent,
    MostrarMaterialesComponent,
    DialogImagenComponent,
    DescripcionConvencionComponent,
    CategoriaComponent,
    EntradaComponent,
    CreditosComponent,
    BusquedaComponent,
    EtiquetaComponent,
    CdnComponent,
    CdpdComponent,
    GlosarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    MatSliderModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    ShareButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ConvencionModule { }
