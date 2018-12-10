import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-phototips',
  templateUrl: './phototips.component.html',
  styleUrls: ['./phototips.component.css']
})
export class PhototipsComponent implements OnInit {
  descripcion: String = '';

  constructor() { }

  ngOnInit() {
  }
  save() {
    this.descripcion = $(".click2edit").summernote('code')
    $(".click2edit").summernote('destroy');
  };
}
