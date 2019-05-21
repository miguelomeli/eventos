import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Waypoint: any;

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css']
})
export class Slider2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    var waypoint = new Waypoint({
      element: document.getElementById('id_slider_2'),
      handler: function (direction) {
        $('.slider2-img-1').addClass('fadeInLeft');
        $('.slider2-img-1').removeClass('ocultar');
      },
      offset: 'bottom-in-view'
    });
  }

}
