import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes importados
import { Pagina2Component } from './pagina2/pagina2.component';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  { path: 'home', component: PruebaComponent },
  { path: 'formulario', component: FormularioComponent },
  
  { path: 'pagina2', component: Pagina2Component },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
