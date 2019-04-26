import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  perfil: any = {
    nombreCompleto: 'Frida Villela',
    correo: 'fridavi@gmail.com',
    contactar: ' ',
    direccion: 'Ciudad de Guatemala',
    perfilFacebook: '',
    perfilTwiter: '',
    perfilInstagram: '',
    youtube: '',
    descripcionBreve: '. Siempre busco realzar la belleza y la esencia de las personas, paisajes u objetos a travez de la fotografia.',
    descripcionPerfil: `
    Desde 2013 tengo el privilegio de ejercer como fotógrafa profesional, me apasiona captar y congelar momentos. Siempre busco realzar la belleza y la esencia de las personas, paisajes u objetos que voy a fotografiar para comunicar a través de la foto algo que considero muy importante pues además de ser fotógrafa poseo una Licenciatura en Comunicación Social y una Maestría en Comunicación Organizacional.
    Una de las razones por la que descubrí que tenía esta pasión fue mi trabajo dentro de Corporación EEGSA, pues una de mis atribuciones es hacer la cobertura fotográfica y documental de sus eventos corporativos, además de la producción de sesiones fotográficas para sus campañas publicitarias internas que van enfocadas a generar identidad y sentido de pertenencia en sus trabajadores. 
    Esto me abrió las puertas para estudiar en la FOTOTECA mi casa de estudios y esto me motivó para adquirir mi propio equipo fotográfico CANON, y allí inicié a tomar fotografías para eventos sociales, retratos y fotografías de estudio; esto sumado a los sólidos conocimientos técnicos que me brindó esta institución. 
    En esta página encontrará parte de mi trabajo y dónde contactarme. Con gusto puedo elaborar una cotización que se ajuste a sus necesidades.   

    `,
    timeLine: [
      {
        usuario: 'John Doe5',
        fecha: '23/11/2018',
        comment: 'Assing a new task Design Weblayout',
        rating: 5
      },
      {
        usuario: 'John Doe6',
        fecha: '23/11/2018',
        comment: 'Assing a new task Design Weblayout',
        rating: 5
      },
      {
        usuario: 'John Doe7',
        fecha: '23/11/2018',
        comment: 'Assing a new task Design Weblayout',
        rating: 5
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
