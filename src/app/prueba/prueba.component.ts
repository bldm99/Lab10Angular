import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})


export class PruebaComponent {
  @Input() objeto: any;
  @Input() val: string;
  constructor() {

    this.val = ''; // Asignar un valor inicial a 'valorPropiedad'
  }
}
