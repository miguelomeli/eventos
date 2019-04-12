import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Waypoint: any;

@Component({
  selector: 'app-pagocobro',
  templateUrl: './pagocobro.component.html',
  styleUrls: ['./pagocobro.component.css']
})
export class PagocobroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var waypoint = new Waypoint({
      element: document.getElementById('pagos-cobros'),
      handler: function (direction) {
        console.log('entra pagos-cobros');
        $('.id-pagcob-h1-1').addClass('bounceInUp');
        $('.id-pagcob-h1-1').removeClass('ocultar');
        $('.id-pagcob-li-1').addClass('bounceInLeft');
        $('.id-pagcob-li-1').removeClass('ocultar');
        $('.id-pagcob-li-2').addClass('bounceInLeft');
        $('.id-pagcob-li-2').removeClass('ocultar');
        $('.id-pagcob-li-3').addClass('bounceInDown');
        $('.id-pagcob-li-3').removeClass('ocultar');
        $('.id-pagcob-li-4').addClass('bounceInRight');
        $('.id-pagcob-li-4').removeClass('ocultar');
        $('.id-pagcob-li-5').addClass('bounceInRight');
        $('.id-pagcob-li-5').removeClass('ocultar');

        $('.id-pagcob-h1-1').addClass('animated bounceInUp').one(animationEnd, function () {
          $('.id-pagcob-h1-1').removeClass('animated bounceInUp');
        });

        $('.id-pagcob-li-1').addClass('animated bounceInLeft').one(animationEnd, function () {
          $('.id-pagcob-li-1').removeClass('animated bounceInLeft');
        });

        $('.id-pagcob-li-2').addClass('animated bounceInLeft').one(animationEnd, function () {
          $('.id-pagcob-li-2').removeClass('animated bounceInLeft');
        });

        $('.id-pagcob-li-3').addClass('animated bounceInDown').one(animationEnd, function () {
          $('.id-pagcob-li-3').removeClass('animated bounceInDown');
        });

        $('.id-pagcob-li-4').addClass('animated bounceInRight').one(animationEnd, function () {
          $('.id-pagcob-li-4').removeClass('animated bounceInRight');
        });

        $('.id-pagcob-li-5').addClass('animated bounceInRight').one(animationEnd, function () {
          $('.id-pagcob-li-5').removeClass('animated bounceInRight');
        });
      },
      offset: 'bottom-in-view'
    });

  }
}
