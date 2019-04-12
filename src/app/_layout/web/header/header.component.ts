import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LoginService} from '../../../services/login.service';

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
  }

  abajo(posicion) {
    document.querySelector(posicion).scrollIntoView({ behavior: 'smooth' });
  }
}
