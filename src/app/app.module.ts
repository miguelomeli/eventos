
import * as $ from 'jquery';
import { NgModule } from '@angular/core';
import { ArchwizardModule } from 'angular-archwizard';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { Http , Response , Headers , HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';



/*Layouts*/
import { WebLayoutComponent } from './_layout/web/layout/layout.component';
import { WebHeaderComponent } from './_layout/web/header/header.component';
import { WebFooterComponent } from './_layout/web/footer/footer.component';



/*Web*/
import { WebHomeComponent } from './web/home/home.component';



/*Servicios*/
import { globalService } from './services/globals.service';
import { LoginService } from './services/login.service';
import { ToastService } from './services/toast.service';
import { AuthGuard } from './services/auth.guard';
import { LoginGuard } from './services/login.guard';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { SliderComponent } from './web/home/components/slider/slider.component';
import { Slider1Component } from './web/home/components/slider/sliders/slider1/slider1.component';
import { Slider2Component } from './web/home/components/slider/sliders/slider2/slider2.component';
import { Slider3Component } from './web/home/components/slider/sliders/slider3/slider3.component';
import { QuienessomosComponent } from './web/home/components/quienessomos/quienessomos.component';
import { PaquetesComponent } from './web/home/components/paquetes/paquetes.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    WebLayoutComponent,
    WebHeaderComponent,
    WebFooterComponent,
    WebHomeComponent,
    SliderComponent,
    Slider1Component,
    Slider2Component,
    Slider3Component,
    QuienessomosComponent,
    PaquetesComponent,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    FormsModule,
    routing,
    ArchwizardModule,
    HttpClientModule,
    HttpModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule.forRoot()
  ],
  providers: [
    globalService,
    LoginService,
    ToastService,
    AuthGuard,
    LoginGuard,
    ApiService,
    AuthService,
    TokenInterceptorService,
    NgbActiveModal,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
