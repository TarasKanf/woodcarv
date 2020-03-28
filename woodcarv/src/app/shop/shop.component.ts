import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less']
})
export class ShopComponent implements OnInit {
  shopElements;
  constructor(
    private shopService: ShopService

  ) { }

  ngOnInit() {
    this.shopElements = this.shopService.getShopList();

  }
}
