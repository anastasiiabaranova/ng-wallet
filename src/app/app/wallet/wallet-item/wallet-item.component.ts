import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Purchase } from '../../../../shared/models/Purchase';

@Component({
  selector: 'app-wallet-item',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.less']
})
export class WalletItemComponent {

  @Input() purchase!: Purchase;
  @Input() expanded!: boolean;

  @Output()
  expand = new EventEmitter<Purchase>();
  @Output()
  edit = new EventEmitter<Purchase>();
  @Output()
  delete = new EventEmitter<Purchase>();

  editorExpanded = false;

  get formattedPrice(): string {
    return `${this.purchase.price} ₽`;
  }

  get formattedDate(): string {
    return `${this.purchase.date}`.substring(0, 10);
  }

  expandItem(): void {
    this.expand.emit(this.purchase);
  }

  deletePurchase(): void {
    this.delete.emit(this.purchase);
  }

  editPurchase(purchase: Purchase): void {
    this.edit.emit(purchase);
    this.toggle();
  }

  toggle(): void {
    this.editorExpanded = !this.editorExpanded
  }
}
