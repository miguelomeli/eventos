import {Component, OnInit} from '@angular/core';
import {globalService} from './services/globals.service';
import {LoginService} from './services/login.service';
import {TranslateService} from '@ngx-translate/core';
import {ToastService} from './services/toast.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GLOBAL} from './services/global';



@Component({
  selector: 'movil',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit  {
  public dataUser = null;
  public token = null;

  constructor(
    private _loginService: LoginService ,
  ) {

  }

  ngOnInit() {
    this.dataUser = this._loginService.getData();
    this.token = this._loginService.getToken();

  }


}
