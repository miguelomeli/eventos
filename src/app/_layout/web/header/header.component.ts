import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LoginService} from '../../../services/login.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { log } from 'util';
import * as $ from 'jquery';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
declare var Waypoint: any;

@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WebHeaderComponent implements OnInit {
  public imgLang = './assets/img/flags/lang_es.png';
  public txtLang = 'es';
  public activeToken = false;
  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private translate: TranslateService,
    private _loginService: LoginService,
    private authService: AuthService,
    private router: Router
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
    var waypoint = new Waypoint({
      element: document.getElementById('head-simple'),
      handler: function (direction) {
        // console.log('entra componente uno');
        $('.id-heasim-img-1').addClass('fadeInLeft');
        $('.id-heasim-img-1').removeClass('ocultar');
        $('.id-heasim-a-1').addClass('fadeInRight');
        $('.id-heasim-a-1').removeClass('ocultar');
        $('.id-heasim-a-2').addClass('fadeInRight');
        $('.id-heasim-a-2').removeClass('ocultar');
      },
      offset: 'bottom-in-view'
    });

    this.imgLang = './assets/img/flags/lang_' + this.txtLang + '.png';
  }

  abajo(posicion) {
    document.querySelector(posicion).scrollIntoView({ behavior: 'smooth' });
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-title' })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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
    this.modalService.open(content, { centered: true, windowClass: 'dark-modal' });

    // this.formData = {
    //   id_curso: this._route.snapshot.paramMap.get('id'),
    //   nombre: '',
    //   apellido: '',
    //   telefono: '',
    //   celular: '',
    //   descripcion: ''
    // };
  }

  a_paso_1() {
    const lin_3_pasos = document.getElementById('lin_3_pasos');
    lin_3_pasos.classList.add('linea-3-pasos');
    lin_3_pasos.classList.remove('linea-3-pasos-2');

    const circulo_1 = document.getElementById('circulo_1');
    circulo_1.classList.remove('circulo-metodo-pago-1-succes');

    const texto_1 = document.getElementById('texto_1');
    texto_1.classList.remove('texto-circulo-pago-1-succes');

    const circulo_2 = document.getElementById('circulo_2');
    circulo_2.classList.add('circulo-metodo-pago-inactivo');

    const texto_2 = document.getElementById('texto_2');
    texto_2.classList.add('texto-circulo-pago-inactivo');

    const pago_seccion_1 = document.getElementById('pago_seccion_1');
    pago_seccion_1.classList.add('in', 'active');

    const pago_seccion_2 = document.getElementById('pago_seccion_2');
    pago_seccion_2.classList.remove('in', 'active');
  }

  a_paso_2() {
    const lin_3_pasos = document.getElementById('lin_3_pasos');
    lin_3_pasos.classList.remove('linea-3-pasos');
    lin_3_pasos.classList.add('linea-3-pasos-2');

    const circulo_1 = document.getElementById('circulo_1');
    circulo_1.classList.add('circulo-metodo-pago-1-succes');

    const texto_1 = document.getElementById('texto_1');
    texto_1.classList.add('texto-circulo-pago-1-succes');

    const circulo_2 = document.getElementById('circulo_2');
    circulo_2.classList.remove('circulo-metodo-pago-inactivo');

    const texto_2 = document.getElementById('texto_2');
    texto_2.classList.remove('texto-circulo-pago-inactivo');

    const pago_seccion_1 = document.getElementById('pago_seccion_1');
    pago_seccion_1.classList.remove('in', 'active');

    const pago_seccion_2 = document.getElementById('pago_seccion_2');
    pago_seccion_2.classList.add('in', 'active');
  }
}
