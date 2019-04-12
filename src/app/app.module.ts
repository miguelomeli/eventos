
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
// import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


/*Layouts*/
import { WebLayoutComponent } from './_layout/web/layout/layout.component';
import { WebHeaderComponent } from './_layout/web/header/header.component';
import { WebFooterComponent } from './_layout/web/footer/footer.component';
import { WebFooterSimpleComponent } from './_layout/web/footer-simple/footer-simple.component';

/*Layouts-simple*/
import { WebLayoutSimpleComponent } from './_layout/web/layout-simple/layout-simple.component';
import { WebHeaderSimpleComponent } from './_layout/web/header-simple/header-simple.component';

/*Web*/
import { WebHomeComponent } from './web/home/home.component';
import { WebDeportesComponent } from './web/deportes/deportes.component';
import { WebCasinoenvivoComponent } from './web/casinoenvivo/casinoenvivo.component';
import { WebEnvivoComponent } from './web/envivo/envivo.component';
import { WebSlotsComponent } from './web/slots/slots.component';
import { WebPromocionesComponent } from './web/promociones/promociones.component';
import { WebBooksComponent } from './web/books/books.component';
import { WebRegistroComponent } from './web/registro/registro.component';
import { WebBancaComponent } from './web/banca/banca.component';
import { WebCaballosComponent } from './web/caballos/caballos.component';
import { WebApuestascaballosComponent } from './web/apuestascaballos/apuestascaballos.component';
import { WebApuestasenvivoComponent } from './web/apuestasenvivo/apuestasenvivo.component';



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
import { PagocobroComponent } from './web/home/components/pagocobro/pagocobro.component';

import { DestacadosComponent } from './web/deportes/components/destacados/destacados.component';
import { EventosComponent } from './web/deportes/components/eventos/eventos.component';
import { TicketApuestaComponent } from './web/deportes/components/ticket-apuesta/ticket-apuesta.component';
import { BannerComponent } from './web/deportes/components/banner/banner.component';
import { PanelComponent } from './web/deportes/components/panel/panel.component';
import { BannerenvivoComponent } from './web/envivo/components/bannerenvivo/bannerenvivo.component';
import { DestacadosenvivoComponent } from './web/envivo/components/destacadosenvivo/destacadosenvivo.component';
import { EventosenvivoComponent } from './web/envivo/components/eventosenvivo/eventosenvivo.component';
import { PanelenvivoComponent } from './web/envivo/components/panelenvivo/panelenvivo.component';
import { TicketApuestaenvivoComponent } from './web/envivo/components/ticket-apuestaenvivo/ticket-apuestaenvivo.component';
import { DestacadospromocionesComponent } from './web/promociones/components/destacadospromociones/destacadospromociones.component';
import { EventospromocionesComponent } from './web/promociones/components/eventospromociones/eventospromociones.component';
import { TicketApuestapromocionesComponent } from './web/promociones/components/ticket-apuestapromociones/ticket-apuestapromociones.component';
import { InfopromocionesComponent } from './web/promociones/components/infopromociones/infopromociones.component';
import { CategoriasComponent } from './web/home/components/categorias/categorias.component';
import { VideoComponent } from './web/home/components/video/video.component';
import { FormularioComponent } from './web/registro/components/formulario/formulario.component';
import { InfocaballosComponent } from './web/caballos/components/infocaballos/infocaballos.component';
import { InfoenvivoComponent } from './web/envivo/components/infoenvivo/infoenvivo.component';
import { NavdeportesComponent } from './web/deportes/components/navdeportes/navdeportes.component';
import { HeaderalternoComponent } from './web/casinoenvivo/components/headeralterno/headeralterno.component';
import { LobbyComponent } from './web/casinoenvivo/components/lobby/lobby.component';
import { TicketApuestacaballosComponent } from './web/apuestascaballos/components/ticket-apuestacaballos/ticket-apuestacaballos.component';
import { CaballostracksComponent } from './web/apuestascaballos/components/caballostracks/caballostracks.component';
import { CaballosupcomingComponent } from './web/apuestascaballos/components/caballosupcoming/caballosupcoming.component';
import { TicketDeportesComponent } from './web/deportes/components/ticket-deportes/ticket-deportes.component';
import { PanelinfoComponent } from './web/deportes/components/panelinfo/panelinfo.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    WebLayoutComponent,
    WebHeaderComponent,
    WebHeaderSimpleComponent,
    WebFooterComponent,
    WebFooterSimpleComponent,
    WebLayoutSimpleComponent,
    WebHomeComponent,
    WebDeportesComponent,
    WebCasinoenvivoComponent,
    WebEnvivoComponent,
    WebSlotsComponent,
    WebPromocionesComponent,
    WebBooksComponent,
    WebRegistroComponent,
    WebBancaComponent,
    WebApuestascaballosComponent,
    WebCaballosComponent,
    WebApuestasenvivoComponent,
    SliderComponent,
    PagocobroComponent,
    DestacadosComponent,
    EventosComponent,
    TicketApuestaComponent,
    BannerComponent,
    PanelComponent,
    BannerenvivoComponent,
    DestacadosenvivoComponent,
    EventosenvivoComponent,
    PanelenvivoComponent,
    TicketApuestaenvivoComponent,
    DestacadospromocionesComponent,
    EventospromocionesComponent,
    TicketApuestapromocionesComponent,
    InfopromocionesComponent,
    CategoriasComponent,
    VideoComponent,
    FormularioComponent,
    InfocaballosComponent,
    InfoenvivoComponent,
    NavdeportesComponent,
    HeaderalternoComponent,
    LobbyComponent,
    TicketApuestacaballosComponent,
    CaballostracksComponent,
    CaballosupcomingComponent,
    TicketDeportesComponent,
    PanelinfoComponent
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
    // SweetAlert2Module.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule.forRoot()
    // MDBBootstrapModule.forRoot(),
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
