import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShopComponent } from './shop/shop.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  // github fix
  { path: 'woodcarv', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
