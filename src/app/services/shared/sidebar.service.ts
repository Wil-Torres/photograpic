import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu : any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Home', url: '/home'},
        {titulo: 'Events', url: '/events'},
        {titulo: 'Company', url: '/company'},
        {titulo: 'Photo Tips', url: '/phototips'},
        {titulo: 'Shop', url: '/shop'},
        {titulo: 'Contact', url: '/contact'}
      ]
    }
  ]

  constructor() { }
}
