import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { EstadoService } from '../estado.service'; 



@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})


export class Pagina2Component  {

  @Input() datosrecibidos: any;

  dataForm: any; //creando objeto vacio el cual podra
                //aquirir todas las propiedades del objeto recibido mediante el url o rutas
 

  constructor(public estadoService: EstadoService , private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {

      const objetoDatos = params; //recibimos los parmetros dela url en objetoDatos
      console.log(objetoDatos['nombre']); // Acceder a los valores del objeto

      //mostar datos mediante estados
      //this.estadoService.actualizarDatos(objetoDatos); //cambiamos el estado 
      //this.dataForm = this.estadoService.getDatos(); // asignamos 

      //mostar datos froma abreviada sin estados
      this.dataForm = objetoDatos; //igualamos el objeto recibido mediante rutas  a dataForm
      
    });
  }

}
