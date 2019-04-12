import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Waypoint: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var waypoint = new Waypoint({
      element: document.getElementById('video'),
      handler: function (direction) {
        console.log('entra componente video');
        $('.id-anim-h2-1-vid').addClass('bounceInLeft');
        $('.id-anim-h2-1-vid').removeClass('ocultar');
        $('.id-anim-p-1').addClass('fadeInLeft');
        $('.id-anim-p-1').removeClass('ocultar');
        $('.id-anim-iframe-1').addClass('fadeInRight');
        $('.id-anim-iframe-1').removeClass('ocultar');

        $('.id-anim-h2-1-vid').addClass('animated bounceInLeft').one(animationEnd, function () {
          $('.id-anim-h2-1-vid').removeClass('animated bounceInLeft');
        });

        $('.id-anim-p-1').addClass('animated fadeInLeft').one(animationEnd, function () {
          $('.id-anim-p-1').removeClass('animated fadeInLeft');
        });

        $('.id-anim-iframe-1').addClass('animated fadeInRight').one(animationEnd, function () {
          $('.id-anim-iframe-1').removeClass('animated fadeInRight');
        });
      },
      offset: 'bottom-in-view'
    });
  }

}
