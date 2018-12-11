import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  galeria = {
    "title": "",
        "subtitle": "",
        "imgUrl": '',
        "gallery": ''
  };
  portafolios = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.portafolios = [
      
      {
        "title": "PORTAFOLIO DE BODA",
        "subtitle": "Momentos inolvidables",
        "imgUrl": '../../../assets/images/portafolio/bodas/IMG_0032.jpg',
        "gallery": [
          '../../../assets/images/portafolio/bodas/IMG_0053.jpg',
          '../../../assets/images/portafolio/bodas/IMG_0032.jpg',
          '../../../assets/images/portafolio/bodas/IMG_0070.jpg',
          '../../../assets/images/portafolio/bodas/IMG_0095.jpg',
          '../../../assets/images/portafolio/bodas/IMG_0108.jpg',
          '../../../assets/images/portafolio/bodas/IMG_0113.jpg',
        ]
      },
      {
        "title": "PORTAFOLIO DE LA FAMILIA",
        "subtitle": "Momentos inolvidables",
        "imgUrl": '../../../assets/images/portafolio/familia/San Juan del Obispo (27).jpg',
        "gallery": [
          '../../../assets/images/portafolio/familia/San Juan del Obispo (27).jpg',
          '../../../assets/images/portafolio/familia/San Juan del Obispo (29).jpg',
          '../../../assets/images/portafolio/familia/San Juan del Obispo (34).jpg',
          '../../../assets/images/portafolio/familia/San Juan del Obispo (35).jpg',
          '../../../assets/images/portafolio/familia/San Juan del Obispo (82).jpg',
          '../../../assets/images/portafolio/familia/San Juan del Obispo (114).jpg',
        ]
      },
      {
        "title": "PORTAFOLIO DE EMBARAZO",
        "subtitle": "Esperando su llegada",
        "imgUrl": '../../../assets/images/portafolio/embarazo/IMG_20180810_132509.jpg',
        "gallery": [
          '../../../assets/images/portafolio/embarazo/IMG_20180809_172445.jpg',
          '../../../assets/images/portafolio/embarazo/IMG_20180810_133157.jpg',
          '../../../assets/images/portafolio/embarazo/IMG_20180810_083743.jpg',
          '../../../assets/images/portafolio/embarazo/IMG_20180810_132509.jpg',
          '../../../assets/images/portafolio/embarazo/IMG_20180809_175645.jpg',
          '../../../assets/images/portafolio/embarazo/IMG_20180809_165753.jpg',
        ]
      },
      {
        "title": "PORTAFOLIO DE NIÑOS",
        "subtitle": "Verlos Jugar, Crecer",
        "imgUrl": '../../../assets/images/portafolio/ninos/_MG_4428.JPG.jpg',
        "gallery": [
          '../../../assets/images/portafolio/ninos/Sobris-08.jpg',
          '../../../assets/images/portafolio/ninos/Sobris-09.jpg',
          '../../../assets/images/portafolio/ninos/Sobris-10.jpg',
          '../../../assets/images/portafolio/ninos/_MG_4428.JPG',
          '../../../assets/images/portafolio/ninos/Sobris-13.jpg',
          '../../../assets/images/portafolio/ninos/Sobris-14.jpg',
        ]
      },
      {
        "title": "PORTAFOLIO DE 15 AÑOS",
        "subtitle": "Comienzo de una nueva etapa",
        "imgUrl": '../../../assets/images/portafolio/quince/_MG_4402.JPG',
        "gallery": [
          '../../../assets/images/portafolio/quince/_MG_4402.JPG',
          '../../../assets/images/portafolio/quince/_MG_4429.JPG',
          '../../../assets/images/portafolio/quince/_MG_4445.JPG',
          '../../../assets/images/portafolio/quince/_MG_4448.JPG',
          '../../../assets/images/portafolio/quince/_MG_4461.JPG',
          '../../../assets/images/portafolio/quince/_MG_9402.JPG'
        ]
      },
      {
        "title": "PORTAFOLIO DE RETRATO",
        "subtitle": "Se quien tú eres",
        "imgUrl": '../../../assets/images/portafolio/retratos/Retrato-3.jpg',
        "gallery": [
          '../../../assets/images/portafolio/retratos/Retrato-3.jpg',
          '../../../assets/images/portafolio/retratos/Retrato-6.jpg',
        ]
      }
      
    ]

    this.route.params.subscribe(params => {
      console.log(params)
      let id = params['id'];
      switch (id) {
        case '1':
          this.galeria = this.portafolios[0];
          break;
        case '2':
          this.galeria = this.portafolios[1];

          break;
        case '3':
          this.galeria = this.portafolios[2];
          break;
        case '4':
          this.galeria = this.portafolios[3];
          break;
        case '5':
          this.galeria = this.portafolios[4];
          break;
        case '6':
          this.galeria = this.portafolios[5];
          break;
        default:
          break;
      }

    })
  }

}
