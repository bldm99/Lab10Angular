import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }
  data: any;

 
  actualizarDatos(datos: any) {
    this.data = datos;
  }

  getDatos(): any {
    return this.data;
  }
}
