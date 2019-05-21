import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Waypoint: any;

@Component({
  selector: 'app-infomap',
  templateUrl: './infomap.component.html',
  styleUrls: ['./infomap.component.css']
})
export class InfomapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var waypoint = new Waypoint({
      element: document.getElementById('div_id_infomap_1'),
      handler: function (direction) {
        $('.div_infomap_1').addClass('fadeInDown');
        $('.div_infomap_1').removeClass('ocultar');

        $('.div_infomap_1').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.div_infomap_1').removeClass('animated fadeInDown');
        });
      },
      offset: 'bottom-in-view'
    });
  }

}
