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
      element: document.getElementById('foot-container'),
      handler: function (direction) {
        console.log('entra componente footerrr');
        $('.id-foocon-div-1').addClass('fadeInRight');
        $('.id-foocon-div-1').removeClass('ocultar');
        $('.id-foocon-li-1').addClass('fadeInRight');
        $('.id-foocon-li-1').removeClass('ocultar');
        $('.id-foocon-li-2').addClass('fadeInRight');
        $('.id-foocon-li-2').removeClass('ocultar');
        $('.id-foocon-li-3').addClass('fadeInRight');
        $('.id-foocon-li-3').removeClass('ocultar');
        $('.id-foocon-li-4').addClass('bounceInDown');
        $('.id-foocon-li-4').removeClass('ocultar');
        $('.id-foocon-li-5').addClass('fadeInLeft');
        $('.id-foocon-li-5').removeClass('ocultar');
        $('.id-foocon-li-6').addClass('fadeInLeft');
        $('.id-foocon-li-6').removeClass('ocultar');
        $('.id-foocon-li-7').addClass('fadeInLeft');
        $('.id-foocon-li-7').removeClass('ocultar');
        $('.id-foocon-li-8').addClass('fadeInLeft');
        $('.id-foocon-li-8').removeClass('ocultar');

        $('.id-foocon-div-1').addClass('animated fadeInRight').one(animationEnd, function () {
          $('.id-foocon-div-1').removeClass('animated fadeInRight');
        });

        $('.id-foocon-li-1').addClass('animated fadeInRight').one(animationEnd, function () {
          $('.id-foocon-li-1').removeClass('animated fadeInRight');
        });

        $('.id-foocon-li-2').addClass('animated fadeInRight').one(animationEnd, function () {
          $('.id-foocon-li-2').removeClass('animated fadeInRight');
        });

        $('.id-foocon-li-3').addClass('animated fadeInRight').one(animationEnd, function () {
          $('.id-foocon-li-3').removeClass('animated fadeInRight');
        });

        $('.id-foocon-li-4').addClass('animated bounceInDown').one(animationEnd, function () {
          $('.id-foocon-li-4').removeClass('animated bounceInDown');
        });

        $('.id-foocon-li-5').addClass('animated fadeInLeft').one(animationEnd, function () {
          $('.id-foocon-li-5').removeClass('animated fadeInLeft');
        });

        $('.id-foocon-li-6').addClass('animated fadeInLeft').one(animationEnd, function () {
          $('.id-foocon-li-6').removeClass('animated fadeInLeft');
        });

        $('.id-foocon-li-7').addClass('animated fadeInLeft').one(animationEnd, function () {
          $('.id-foocon-li-7').removeClass('animated fadeInLeft');
        });

        $('.id-foocon-li-8').addClass('animated fadeInLeft').one(animationEnd, function () {
          $('.id-foocon-li-8').removeClass('animated fadeInLeft');
        });
      },
      offset: 'bottom-in-view'
    });
  }

  abajo(posicion) {
    document.querySelector(posicion).scrollIntoView({ behavior: 'smooth' });
  }
}
