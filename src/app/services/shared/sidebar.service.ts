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
        {titulo: 'Events', url: ''},
        {titulo: 'Company', url: ''},
        {titulo: 'Photo Tips', url: ''},
        {titulo: 'Shop', url: ''},
        {titulo: 'Contact', url: ''}
      ]
    }
  ]

  constructor() { }
}
