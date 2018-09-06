import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    nombre:string = "Javier";

    nombreCompleto:string = "albErto jAviEr roDRiguEz";

    arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    PI = Math.PI;

    a = 0.234;

    salario = 1234.5;

    heroe = {
      nombre: "Logan",
      clave: "Wolverine",
      edad: 500,
      direccion: {
        calle: "Primera",
        casa: "19"
      }
    };

    dataAsync = new Promise ( (resolve, reject) => {
      setTimeout( () => resolve("Llego la data"), 3000);
    });

    fecha = new Date();

    video = "GH9u4eZQGk8";

    activar = true;
}