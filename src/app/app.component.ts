import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'movil',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit  {
  public dataUser = null;
  public token = null;

  constructor() {

  }

  ngOnInit() {

  }


}
