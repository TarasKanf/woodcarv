import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ShopService {
  items = [];

  getShopList() {
    return this.http.get('/assets/shopEl.json');
  }

  constructor(
    private http: HttpClient
  ) { }
   
}