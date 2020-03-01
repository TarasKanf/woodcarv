import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
import localeUkExtra from '@angular/common/locales/extra/uk';
import { MainLogoComponent } from './main-logo/main-logo.component';
import { MenuComponent } from './menu/menu.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { HomeComponent } from './home/home.component';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ShopComponent } from './shop/shop.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MaterialModule } from './material-module';

registerLocaleData(localeUk, 'uk', localeUkExtra);

@NgModule({
  declarations: [
    AppComponent,
    MainLogoComponent,
    MenuComponent,
    SiteHeaderComponent,
    HomeComponent,
    FooterNavigationComponent,
    AboutUsComponent,
    PortfolioComponent,
    ShopComponent,
    ContactPageComponent,
    ServicesPageComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
