import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  @media screen and (min-width: 769px) {
    /* STYLES HERE */
    .marquesina1{top: -150px;width: 100%;height: 500px;text-align: center;padding: -500px 0 -500px 0;color: #ffffff;}
    .marquesina2{top: -250px;width: 100%;height: 500px;text-align: center;padding: -500px 0 -500px 0;color: #ffffff;}
    .marquesina3{top: -0px;width: 100%;height: 500px;text-align: center;padding: -500px 0 -500px 0;color: #ffffff;}
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 768px) { 
      /* STYLES HERE */
  }

  @media only screen and (max-device-width: 480px) {
      /* STYLES HERE */
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
