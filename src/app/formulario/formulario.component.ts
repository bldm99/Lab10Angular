import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { SuperpuestoComponent } from '../superpuesto/superpuesto.component';
import { Pagina2Component } from '../pagina2/pagina2.component';
import { PruebaComponent } from '../prueba/prueba.component';

const datos = [
  {
    nombre: "Node js y espress",
    puesto: "Lunes",
    foto: "https://i.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg",
    equipo: "Web",
  },
  {
    nombre: "CloudFormation",
    puesto: "Viernes",
    foto: "https://blog.adobe.com/en/publish/2021/08/31/media_1649ebc3fbbce0df508081913819d491fc3f7c7a9.png?width=2000&format=webply&optimize=medium",
    equipo: "AWS",
  },
  {
    nombre: "Prpos y Hooks",
    puesto: "Miercoles",
    foto: "https://www.bacancytechnology.com/blog/wp-content/uploads/2019/08/React-UI-Component-Libraries-min.png",
    equipo: "React Avanzado",
  },
  {
    nombre: "Componetes en Angular",
    puesto: "Domingo",
    foto: "https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2020/09/angular-homepage.jpg",
    equipo: "Angular",
  },

];

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})



export class FormularioComponent implements OnInit {

  compaceptar: SuperpuestoComponent;
  //componentePagina2: Pagina2Component;

  datosx: any[] = datos;

  constructor(private router: Router) {
    this.compaceptar = new SuperpuestoComponent(this.router);
    //this.componentePagina2= new Pagina2Component(this.router);
  }

  mostrar: boolean = false;

  formIsEmpty: boolean = true;
  submitButtonClicked: boolean = false;

  nombre: string = '';
  email: string = '';

  valoresFormulario: any;

  aceptar = () => {
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);
    //console.log(this.valoresFormulario.nombre)
  }

  validarCampos() {
    this.formIsEmpty = this.nombre.trim() === ''; //true cuando no hay valor
    this.formIsEmpty = this.email.trim() === '';
  }

  onSubmit() {
    if (this.submitButtonClicked) {

      this.mostrar = true;
      
      this.valoresFormulario = {
        nombre: this.nombre,
        email: this.email
      };

    } else {
      // El botón de formulario fue clicado pero no se envía el mensaje
    }
  }

  onButtonClick() {
    this.submitButtonClicked = true;
  }

  ngOnInit(): void {
    this.compaceptar = new SuperpuestoComponent(this.router); // Crea una instancia del componente importado
    //this.componentePagina2 = new Pagina2Component(this.router);
  }


}
