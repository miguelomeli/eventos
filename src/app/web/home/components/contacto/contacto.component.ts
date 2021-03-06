import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import * as $ from 'jquery';
import * as emailjs from 'emailjs-com';

declare var Waypoint: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor( private http: ApiService ) { }

  ngOnInit() {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var waypoint = new Waypoint({
      element: document.getElementById('id_contacto'),
      handler: function (direction) {
        $('.contac-div-1').addClass('fadeInDown');
        $('.contac-div-1').removeClass('ocultar');
        $('.contac-div-2').addClass('fadeInDown');
        $('.contac-div-2').removeClass('ocultar');
        $('.contac-div-3').addClass('fadeInDown');
        $('.contac-div-3').removeClass('ocultar');
        $('.contac-div-4').addClass('fadeInDown');
        $('.contac-div-4').removeClass('ocultar');
        $('.contac-div-5').addClass('fadeInDown');
        $('.contac-div-5').removeClass('ocultar');

        $('.contac-div-1').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.contac-div-1').removeClass('animated fadeInDown');
        });

        $('.contac-div-2').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.contac-div-2').removeClass('animated fadeInDown');
        });

        $('.contac-div-3').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.contac-div-3').removeClass('animated fadeInDown');
        });

        $('.contac-div-4').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.contac-div-4').removeClass('animated fadeInDown');
        });

        $('.contac-div-5').addClass('animated fadeInDown').one(animationEnd, function () {
          $('.contac-div-5').removeClass('animated fadeInDown');
        });
      },
      offset: 'bottom-in-view'
    });
  }
  JsFormData(){
    $.ajax({
      url: 'http://eventosindependencia.com/funciones.php',
      method: "POST",
      async: false,
      contentType: "application/x-www-form-urlencoded",
      dataType: "json",
      data: $("#form-data").serialize(),
      success: function (respuesta) {
        //Accion 1
        console.log(respuesta);
      }
    });
  }

  /* test() {
    emailjs.sendForm('<YOUR SERVICE ID>', '<YOUR TEMPLATE ID>', '#myForm', '<YOUR USER ID>')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }
 */
}
