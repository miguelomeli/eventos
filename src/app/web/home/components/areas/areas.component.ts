import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Waypoint: any;

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var waypoint = new Waypoint({
      element: document.getElementById('id_areas'),
      handler: function (direction) {
        $('.areas-div-1').addClass('fadeInDown');
        $('.areas-div-1').removeClass('ocultar');
        $('.areas-div-2').addClass('fadeInDown');
        $('.areas-div-2').removeClass('ocultar');
        $('.areas-div-3').addClass('fadeInDown');
        $('.areas-div-3').removeClass('ocultar');
        $('.areas-div-4').addClass('fadeInDown');
        $('.areas-div-4').removeClass('ocultar');
        $('.areas-div-5').addClass('fadeInDown');
        $('.areas-div-5').removeClass('ocultar');

        $('.areas-div-1').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.areas-div-1').removeClass('animated fadeInDown');
        });

        $('.areas-div-2').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.areas-div-2').removeClass('animated fadeInDown');
        });

        $('.areas-div-3').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.areas-div-3').removeClass('animated fadeInDown');
        });

        $('.areas-div-4').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.areas-div-4').removeClass('animated fadeInDown');
        });

        $('.areas-div-5').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.areas-div-5').removeClass('animated fadeInDown');
        });
      },
      offset: 'bottom-in-view'
    });
  }

}
