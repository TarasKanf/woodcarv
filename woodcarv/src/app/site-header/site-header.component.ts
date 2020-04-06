import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.less']
})
export class SiteHeaderComponent {
  currentLang = null;

  languageList = [{ code: 'uk', label: 'UK' }, { code: 'en', label: 'EN' }];
  constructor(@Inject(LOCALE_ID) protected localeId: string) {
    this.currentLang = this.languageList.find(x => x.code === localeId) || { code: 'en', label: 'English' };
  }
}
