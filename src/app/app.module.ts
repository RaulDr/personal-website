import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MainComponent} from './main/main.component';
import {NavbarComponent} from './global/navbar/navbar.component';
import { FooterComponent } from './global/footer/footer.component';
import { HeroComponent } from './main/hero/hero.component';
import { PortofolioComponent } from './main/portofolio/portofolio.component';
import { AboutComponent } from './main/about/about.component';
import { DividerCustomComponent } from './global/divider-custom/divider-custom.component';
import { ContactMeComponent } from './main/contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    PortofolioComponent,
    AboutComponent,
    DividerCustomComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
