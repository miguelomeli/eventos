import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LoginService} from '../../../services/login.service';
import * as $ from 'jquery';
declare var Waypoint: any;

@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WebHeaderComponent implements OnInit {
  public imgLang = './assets/img/flags/lang_es.png';
  public txtLang = 'es';
  public activeToken = false;
  closeResult: string;

  constructor(
    private translate: TranslateService,
    private _loginService: LoginService,
  ) {
    this.txtLang = this._loginService.getLang();
    translate.setDefaultLang(this.txtLang);
    this.activeToken = this._loginService.checkAuth();
  }

  switchLanguage(language: string) {
    this.imgLang = './assets/img/flags/lang_' + language + '.png';
    localStorage.setItem('lang', language);
    this.translate.use(language);
  }

  ngOnInit() {
    this.imgLang = './assets/img/flags/lang_' + this.txtLang + '.png';

    var waypoint = new Waypoint({
      element: document.getElementById('head-simple'),
      handler: function (direction) {
        $('.head-img-1').addClass('fadeInLeft');
        $('.head-img-1').removeClass('ocultar');
        $('.head-li-1').addClass('fadeInLeft');
        $('.head-li-1').removeClass('ocultar');
        $('.head-li-2').addClass('fadeInLeft');
        $('.head-li-2').removeClass('ocultar');
        $('.head-li-3').addClass('fadeInLeft');
        $('.head-li-3').removeClass('ocultar');
        $('.head-li-4').addClass('fadeInLeft');
        $('.head-li-4').removeClass('ocultar');
        $('.head-li-5').addClass('fadeInLeft');
        $('.head-li-5').removeClass('ocultar');
        $('.head-li-6').addClass('fadeInLeft');
        $('.head-li-6').removeClass('ocultar');
      },
      offset: 'bottom-in-view'
    });
  }

  abajo(posicion) {
    document.querySelector(posicion).scrollIntoView({ behavior: 'smooth' });
  }
}
