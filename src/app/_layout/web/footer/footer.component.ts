import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class WebFooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

  abajo(posicion) {
    document.querySelector(posicion).scrollIntoView({ behavior: 'smooth' });
  }
}
