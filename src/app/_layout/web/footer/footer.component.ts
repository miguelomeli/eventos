import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Waypoint: any;

@Component({
  selector: 'web-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class WebFooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var waypoint = new Waypoint({
      element: document.getElementById('footer_interno'),
      handler: function (direction) {
        $('.foot-img-1').addClass('fadeInLeft');
        $('.foot-img-1').removeClass('ocultar');
        $('.foot-li-1').addClass('fadeInLeft');
        $('.foot-li-1').removeClass('ocultar');
        $('.foot-li-2').addClass('fadeInLeft');
        $('.foot-li-2').removeClass('ocultar');
        $('.foot-li-3').addClass('fadeInLeft');
        $('.foot-li-3').removeClass('ocultar');
        $('.foot-li-4').addClass('fadeInLeft');
        $('.foot-li-4').removeClass('ocultar');
        $('.foot-li-5').addClass('fadeInLeft');
        $('.foot-li-5').removeClass('ocultar');
        $('.foot-li-6').addClass('fadeInLeft');
        $('.foot-li-6').removeClass('ocultar');

        $('.foot-img-1').addClass('animated fadeInLeft').one(animationEnd, function () {
          $('.foot-img-1').removeClass('animated fadeInLeft');
        });

        $('.foot-li-1').addClass('animated fadeInLeft').one(animationEnd, function () {
          $('.foot-li-1').removeClass('animated fadeInLeft');
        });

        $('.foot-li-2').addClass('animated fadeInLeft').one(animationEnd, function () {
          $('.foot-li-2').removeClass('animated fadeInLeft');
        });

        $('.foot-li-3').addClass('animated fadeInLeft').one(animationEnd, function () {
          $('.foot-li-3').removeClass('animated fadeInLeft');
        });

        $('.foot-li-4').addClass('animated fadeInLeft').one(animationEnd, function () {
          $('.foot-li-4').removeClass('animated fadeInLeft');
        });

        $('.foot-li-5').addClass('animated fadeInLeft').one(animationEnd, function () {
          $('.foot-li-5').removeClass('animated fadeInLeft');
        });

        $('.foot-li-6').addClass('animated fadeInLeft').one(animationEnd, function () {
          $('.foot-li-6').removeClass('animated fadeInLeft');
        });
      },
      offset: 'bottom-in-view'
    });
  }

  abajo(posicion) {
    document.querySelector(posicion).scrollIntoView({ behavior: 'smooth' });
  }
}
