import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';
import swal from 'sweetalert';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import smoothscroll from 'smoothscroll-polyfill';

import { TranslateService } from '@ngx-translate/core';




declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-web-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class WebHomeComponent implements OnInit {

  public imgLang = './assets/img/flags/lang_es.png';
  public txtLang = 'es';
  private contactanos_url = 'http://localhost:2900/api/contactanos';
  closeResult: string;
  contactoData:any = {
    nombre: '',
    correo_electronico: '',
    mensaje: '',
    pagina: ''
  };

  constructor(
    private _http: HttpClient,
    private apiService: ApiService,
    private router: Router,
    private modalService: NgbModal,
    private translate: TranslateService
  ) {
    translate.setDefaultLang(this.txtLang);
    smoothscroll.polyfill();



  }

  switchLanguage(language: string) {
    this.imgLang = './assets/img/flags/lang_' + language + '.png';
    localStorage.setItem('lang' , language);
    this.translate.use(language);
  }

  ngOnInit() {
    this.imgLang = './assets/img/flags/lang_' + this.txtLang + '.png';

  }

  contactar() {
    this.contactoData.pagina = 'driwi';
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}