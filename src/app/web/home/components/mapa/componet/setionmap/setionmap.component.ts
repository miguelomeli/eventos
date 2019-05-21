import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Waypoint: any;

@Component({
  selector: 'app-setionmap',
  templateUrl: './setionmap.component.html',
  styleUrls: ['./setionmap.component.css']
})
export class SetionmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var waypoint = new Waypoint({
      element: document.getElementById('div_id_setmap_1'),
      handler: function (direction) {
        $('.div_setmap_1').addClass('fadeInDown');
        $('.div_setmap_1').removeClass('ocultar');

        $('.div_setmap_1').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.div_setmap_1').removeClass('animated fadeInDown');
        });
      },
      offset: 'bottom-in-view'
    });
  }

}
