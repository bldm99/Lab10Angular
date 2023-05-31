import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';



@Component({
  selector: 'app-superpuesto',
  templateUrl: './superpuesto.component.html',
  styleUrls: ['./superpuesto.component.css']
})
export class SuperpuestoComponent {


  mostrar: boolean = true;

  estado () {
    this.mostrar = false;
  }


  constructor(private router: Router) {
  }

  @Input() miFuncion: Function = () => { };
  @Input() datos: any;


  //Pasando objeto recibido de componente formulario   havia la ruta '/pagina2'
  pag2() {
    this.router.navigate(['/pagina2'] ,  { queryParams: this.datos });
  }
 


}
