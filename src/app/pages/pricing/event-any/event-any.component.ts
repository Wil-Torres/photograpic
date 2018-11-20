import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-any',
  templateUrl: './event-any.component.html',
  styleUrls: ['./event-any.component.css']
})
export class EventAnyComponent implements OnInit {

  precios: any = [];

  constructor() { }

  ngOnInit() {
    this.precios =  [
      {
        "titulo": "FOTOGRAFÍA SEGUIMIENTO",
        "precio": "6000",
        "contenido": [
          "200 Fotografías de tu evento",
          "Duración 8 horas",
          "DVD con fotografías digitales"
        ]
      },
      {
        "titulo": "VIDEO CLIP",
        "precio": "2500",
        "contenido": [
          "Guión personalizado",
          "Sesión de video grabación (3 Horas)",
          "Edición de video",
          "DVD personalizado"
        ]
      },
      {
        "titulo": "PAGINA WEB DEL EVENTO",
        "precio": "1500",
        "contenido": [
          "Invitación Personalizada On-line",
          "Campaña de envío de invitaciones vía e-mail",
          "Registro On-line a tu evento",
          "Sección de Fotografías post-evento",
          "Sección dedicado a los gif del Set de Fotografía *(en el caso de contar con el servicio)"
        ]
      },
      {
        "titulo": "SET DE FOTOGRAFÍA",
        "precio": "1500",
        "contenido": [
          "Montado de Set personalizado",
          "150 Fotografías",
          "Conversión de fotografías en Gif para compartir en Redes Sociales",
          "DVD con fotografías digitales"
        ]
      }
    ]
  }

}
