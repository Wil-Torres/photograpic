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
    contactar: '+502 1234-5678',
    direccion: 'Ciudad de Guatemala',
    perfilFacebook: '',
    perfilTwiter: '',
    perfilInstagram: '',
    youtube: '',
    descripcionBreve: 'Lo que se he logrado plasmar en un fotografia, esos recuerdos inolvidables que te hacer revivir el momento.',
    descripcionPerfil: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries \n   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
