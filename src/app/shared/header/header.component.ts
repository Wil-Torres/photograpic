import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
  .logo_container {
    position: absolute;
    text-align: center;
    display: inline-block;
    top: 15px;
    left: 50%;
    width: auto;
}
@media only screen and (min-width: 960px)
#logo_transparent.logo_container {
    margin-left: -71px;
}
.logo_align {
  /* display: table-cell; */
  /* vertical-align: middle; */
  line-height: 0;
}
.logo_wrapper {
  margin: 0;
  display: inline-block;
  line-height: 0;
  -webkit-transition: margin 0.3s, display 0.3s;
  -moz-transition: margin 0.3s, display 0.3s;
  transition: margin 0.3s, display 0.3s;
}

`]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
