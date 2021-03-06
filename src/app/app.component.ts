import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idioma: string = 'es';
  urlVideo: string = "https://www.youtube.com/embed/cCzkcVufnYM";

  nombre: string = "FeRnAnDo";
  nombre2: string = "fernando javier salva";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;

  porcentaje: number = 0.234;

  salario: number = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

  valorPromesa = new Promise((resolve)=>{
    setTimeout(() => {
      resolve('llego la data');
    }, 3500);
  });

  fecha = new Date();

}
