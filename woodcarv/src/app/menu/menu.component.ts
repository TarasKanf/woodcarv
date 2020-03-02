import { Component, OnInit } from '@angular/core';
import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
