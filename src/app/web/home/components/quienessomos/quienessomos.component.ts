import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Waypoint: any;

@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.css']
})
export class QuienessomosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var waypoint_1 = new Waypoint({
      element: document.getElementById('div_quisom_1'),
      handler: function (direction) {
        $('.quisom1-img-1').addClass('fadeInLeft');
        $('.quisom1-img-1').removeClass('ocultar');

        $('.quisom1-img-1').addClass('animated fadeInLeft').one(animationEnd, function () {
          $('.quisom1-img-1').removeClass('animated fadeInLeft');
        });
      },
      offset: 'bottom-in-view'
    });

    var waypoint_2 = new Waypoint({
      element: document.getElementById('div_quisom_2'),
      handler: function (direction) {
        $('.quisom2-img-1').addClass('fadeInRight');
        $('.quisom2-img-1').removeClass('ocultar');
        $('.quisom2-div-1').addClass('fadeInRight');
        $('.quisom2-div-1').removeClass('ocultar');

        $('.quisom2-img-1').addClass('animated fadeInRight').one(animationEnd, function () {
          $('.quisom2-img-1').removeClass('animated fadeInRight');
        });

        $('.quisom2-div-1').addClass('animated fadeInRight').one(animationEnd, function () {
          $('.quisom2-div-1').removeClass('animated fadeInRight');
        });
      },
      offset: 'bottom-in-view'
    });
  }

}
