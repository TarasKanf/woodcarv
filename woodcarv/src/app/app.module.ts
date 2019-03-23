import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
import localeUkExtra from '@angular/common/locales/extra/uk';
import { MainLogoComponent } from './main-logo/main-logo.component';
import { MenuComponent } from './menu/menu.component';
import { SiteHeaderComponent } from './site-header/site-header.component';

registerLocaleData(localeUk, 'uk', localeUkExtra);

@NgModule({
  declarations: [
    AppComponent,
    MainLogoComponent,
    MenuComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
