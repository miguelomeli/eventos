import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Waypoint: any;

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var waypoint = new Waypoint({
      element: document.getElementById('categorias'),
      handler: function (direction) {
        console.log('entra categorias');
        $('.id-pagcob-h1-1').addClass('bounceInLeft');
        $('.id-pagcob-h1-1').removeClass('ocultar');
        $('.id-pagcob-h1-2').addClass('bounceInLeft');
        $('.id-pagcob-h1-2').removeClass('ocultar');
        $('.id-pagcob-h1-3').addClass('bounceInLeft');
        $('.id-pagcob-h1-3').removeClass('ocultar');
        $('.id-pagcob-h1-4').addClass('bounceInLeft');
        $('.id-pagcob-h1-4').removeClass('ocultar');
        $('.id-pagcob-li-1').addClass('bounceInLeft');
        $('.id-pagcob-li-1').removeClass('ocultar');
        $('.id-pagcob-li-2').addClass('bounceInLeft');
        $('.id-pagcob-li-2').removeClass('ocultar');
        $('.id-pagcob-li-3').addClass('bounceInLeft');
        $('.id-pagcob-li-3').removeClass('ocultar');
        $('.id-pagcob-li-4').addClass('bounceInLeft');
        $('.id-pagcob-li-4').removeClass('ocultar');

        $('.id-pagcob-h1-1').addClass('animated bounceInLeft').one(animationEnd, function () {
          $('.id-pagcob-h1-1').removeClass('animated bounceInLeft');
        });

        $('.id-pagcob-h1-2').addClass('animated bounceInLeft').one(animationEnd, function () {
          $('.id-pagcob-h1-2').removeClass('animated bounceInLeft');
        });

        $('.id-pagcob-h1-3').addClass('animated bounceInLeft').one(animationEnd, function () {
          $('.id-pagcob-h1-3').removeClass('animated bounceInLeft');
        });

        $('.id-pagcob-h1-4').addClass('animated bounceInLeft').one(animationEnd, function () {
          $('.id-pagcob-h1-4').removeClass('animated bounceInLeft');
        });

        $('.id-pagcob-li-1').addClass('animated bounceInLeft').one(animationEnd, function () {
          $('.id-pagcob-li-1').removeClass('animated bounceInLeft');
        });

        $('.id-pagcob-li-2').addClass('animated bounceInLeft').one(animationEnd, function () {
          $('.id-pagcob-li-2').removeClass('animated bounceInLeft');
        });

        $('.id-pagcob-li-3').addClass('animated bounceInLeft').one(animationEnd, function () {
          $('.id-pagcob-li-3').removeClass('animated bounceInLeft');
        });

        $('.id-pagcob-li-4').addClass('animated bounceInLeft').one(animationEnd, function () {
          $('.id-pagcob-li-4').removeClass('animated bounceInLeft');
        });
      },
      offset: 'bottom-in-view'
    });
  }

}
