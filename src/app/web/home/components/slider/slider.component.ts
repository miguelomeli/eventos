import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Waypoint: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    var waypoint = new Waypoint({
      element: document.getElementById('div-1'),
      handler: function (direction) {
        console.log('entra div1');
        $('.id-divuno-img-1').addClass('slideInLeft');
        $('.id-divuno-img-1').removeClass('ocultar');
        $('.id-divuno-h2-1').addClass('zoomInDown');
        $('.id-divuno-h2-1').removeClass('ocultar');
        $('.id-divuno-img-2').addClass('zoomInDown');
        $('.id-divuno-img-2').removeClass('ocultar');
        $('.id-divuno-img-3').addClass('bounceIn');
        $('.id-divuno-img-3').removeClass('ocultar');
        $('.id-divuno-h3-1').addClass('zoomInUp');
        $('.id-divuno-h3-1').removeClass('ocultar');
        $('.id-divuno-a-1').addClass('zoomInUp');
        $('.id-divuno-a-1').removeClass('ocultar');
        $('.id-divuno-img-4').addClass('slideInRight');
        $('.id-divuno-img-4').removeClass('ocultar');
      },
      offset: 'bottom-in-view'
    });

    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var waypoint2 = new Waypoint({
      element: document.getElementById('div-carga-animacion'),
      handler: function (direction) {
        console.log('entra div2');
        $('.id-divdos-img-1').addClass('bounceInUp');
        $('.id-divdos-img-1').removeClass('ocultar');
        $('.id-divdos-h1-1').addClass('bounceInLeft ');
        $('.id-divdos-h1-1').removeClass('ocultar');
        $('.id-divdos-h4-1').addClass('bounceInLeft');
        $('.id-divdos-h4-1').removeClass('ocultar');
        $('.id-divdos-img-2').addClass('bounceInDown');
        $('.id-divdos-img-2').removeClass('ocultar');
        $('.id-divdos-h1-2').addClass('bounceInUp ');
        $('.id-divdos-h1-2').removeClass('ocultar');
        $('.id-divdos-h4-2').addClass('bounceInUp');
        $('.id-divdos-h4-2').removeClass('ocultar');
        $('.id-divdos-img-3').addClass('bounceInUp');
        $('.id-divdos-img-3').removeClass('ocultar');
        $('.id-divdos-h1-3').addClass('bounceInRight ');
        $('.id-divdos-h1-3').removeClass('ocultar');
        $('.id-divdos-h4-3').addClass('bounceInRight');
        $('.id-divdos-h4-3').removeClass('ocultar');

        $('.id-divdos-img-1').addClass('animated bounceInUp').one(animationEnd, function () {
          $('.id-divdos-img-1').removeClass('animated bounceInUp');
        });

        $('.id-divdos-h1-1').addClass('animated bounceInLeft').one(animationEnd, function () {
          $('.id-divdos-h1-1').removeClass('animated bounceInLeft');
        });

        $('.id-divdos-h4-1').addClass('animated bounceInLeft').one(animationEnd, function () {
          $('.id-divdos-h4-1').removeClass('animated bounceInLeft');
        });

        $('.id-divdos-img-2').addClass('animated bounceInDown').one(animationEnd, function () {
          $('.id-divdos-img-2').removeClass('animated bounceInDown');
        });

        $('.id-divdos-h1-2').addClass('animated bounceInUp').one(animationEnd, function () {
          $('.id-divdos-h1-2').removeClass('animated bounceInUp');
        });

        $('.id-divdos-h4-2').addClass('animated bounceInUp').one(animationEnd, function () {
          $('.id-divdos-h4-2').removeClass('animated bounceInUp');
        });

        $('.id-divdos-img-3').addClass('animated bounceInUp').one(animationEnd, function () {
          $('.id-divdos-img-3').removeClass('animated bounceInUp');
        });

        $('.id-divdos-h1-3').addClass('animated bounceInRight').one(animationEnd, function () {
          $('.id-divdos-h1-3').removeClass('animated bounceInRight');
        });

        $('.id-divdos-h4-3').addClass('animated bounceInRight').one(animationEnd, function () {
          $('.id-divdos-h4-3').removeClass('animated bounceInRight');
        });
      },
      offset: 'bottom-in-view'
    });
  }
}
