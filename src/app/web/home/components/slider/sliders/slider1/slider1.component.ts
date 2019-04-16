import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Waypoint: any;

@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css']
})
export class Slider1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    var waypoint = new Waypoint({
      element: document.getElementById('id_slider_1'),
      handler: function (direction) {
        $('.slider1-img-1').addClass('fadeInLeft');
        $('.slider1-img-1').removeClass('ocultar');
      },
      offset: 'bottom-in-view'
    });
  }

}
