import { Purchase } from '../models/Purchase';
import { Inject, Injectable } from '@angular/core';
import { IPurchasesApiService, IPurchasesApiServiceToken } from '../interfaces/IPurchasesApiService';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {
  private _purchases: Purchase[] = [];
  private _summary = 0;

  constructor(
    @Inject(IPurchasesApiServiceToken)
    private purchasesApiService: IPurchasesApiService
  ) { }

  get purchases(): Purchase[] {
    return this._purchases;
  }

  get summary(): number {
    return this._summary;
  }

  initialize() {
    this.purchasesApiService.getAll().subscribe(purchases => {
      this._purchases = purchases.map(p => Object.assign(p, {date: new Date(p.date)}));
      this.updateSummary();
    });
  }

  addPurchase(purchase: Purchase): void {
    this.purchasesApiService.add(purchase).subscribe(() => {
      this._purchases.push(purchase);
      this.updateSummary();
    });
  }

  editPurchase(purchase: Purchase): void {
    this.purchasesApiService.edit(purchase).subscribe(() => {
      this._purchases = this._purchases.map(p => p.id === purchase.id ? purchase : p);
      this.updateSummary();
    });
  }

  delPurchase(purchase: Purchase): void {
    this.purchasesApiService.delete(purchase.id!).subscribe(() => {
      this._purchases = this._purchases.filter(p => p.id !== purchase.id);
      this.updateSummary();
    });
  }

  private updateSummary(): void {
    this._summary = this._purchases.reduce((sum: number, p: Purchase) => {
      return p.price + sum
    }, 0);
  }
}