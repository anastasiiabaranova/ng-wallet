import { Component, OnInit } from '@angular/core';
import {Purchase} from '../../../shared/models/Purchase';

const data: Purchase[] = [
  {
    title: 'Проезд на метро',
    price: 40
  },
  {
    title: 'Iphone Pro Max XXL',
    price: 100500
  },
  {
    title: 'Доширак (острый)',
    price: 123
  },
  {
    title: 'Доширак',
    price: 100
  }
];

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.less']
})
export class WalletComponent implements OnInit {
  purchases: Purchase[] = [];
  expanded = false;
  expandedItemIndex = -1;
  summary = 0;

  ngOnInit(): void {
    this.purchases = data;
    this.updateSummary();
  }

  addPurchase(purchase: Purchase): void {
    this.purchases.push(purchase);
    this.updateSummary();
    this.toggle();
  }

  expandPurchase(purchase: Purchase): void {
    const id = this.purchases.indexOf(purchase)
    this.expandedItemIndex = id !== this.expandedItemIndex ? id : -1;
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }

  private updateSummary(): void {
    this.summary = this.purchases.reduce((sum, p) => p.price + sum, 0);
  }
}
