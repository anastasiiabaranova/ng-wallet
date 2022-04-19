import { Component, OnInit } from '@angular/core';
import { PurchasesService } from 'src/shared/services/purchases.service';
import {Purchase} from '../../../shared/models/Purchase';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.less']
})
export class WalletComponent implements OnInit {
  expanded = false;
  expandedItemId: string | null = null;

  constructor(public purchasesService: PurchasesService) {
  }

  ngOnInit(): void {
    this.purchasesService.initialize();
  }

  expandPurchase({id}: Purchase): void {
    this.expandedItemId = id !== this.expandedItemId ? id : null;
  }

  addPurchase(purchase: Purchase): void {
    this.purchasesService.addPurchase(purchase);
    this.toggle();
  }

  editPurchase(purchase: Purchase): void {
    this.purchasesService.editPurchase(purchase);
  }

  delPurchase(purchase: Purchase): void {
    this.purchasesService.delPurchase(purchase);
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }
}
