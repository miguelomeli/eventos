import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Waypoint: any;

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var waypoint_1 = new Waypoint({
      element: document.getElementById('div_paquet_1'),
      handler: function (direction) {
        $('.paquet-div-1').addClass('fadeInDown');
        $('.paquet-div-1').removeClass('ocultar');

        $('.paquet-div-1').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.paquet-div-1').removeClass('animated fadeInDown');
        });
      },
      offset: 'bottom-in-view'
    });

    var waypoint_2 = new Waypoint({
      element: document.getElementById('div_paquet_2'),
      handler: function (direction) {
        $('.paquet-div-2').addClass('fadeInDown');
        $('.paquet-div-2').removeClass('ocultar');

        $('.paquet-div-2').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.paquet-div-2').removeClass('animated fadeInDown');
        });
      },
      offset: 'bottom-in-view'
    });

    var waypoint_3 = new Waypoint({
      element: document.getElementById('div_paquet_3'),
      handler: function (direction) {
        $('.paquet-div-3').addClass('fadeInDown');
        $('.paquet-div-3').removeClass('ocultar');

        $('.paquet-div-3').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.paquet-div-3').removeClass('animated fadeInDown');
        });
      },
      offset: 'bottom-in-view'
    });
  }

}
