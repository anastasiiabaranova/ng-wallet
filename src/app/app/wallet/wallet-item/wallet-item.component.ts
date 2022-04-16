import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Purchase} from '../../../../shared/models/Purchase';

@Component({
  selector: 'app-wallet-item',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.less']
})
export class WalletItemComponent {
  
  @Input() purchase!: Purchase;
  @Input() expanded!: Boolean;

  @Output()
  onItemClick = new EventEmitter<Purchase>();

  get formattedPrice(): string {
    return `${this.purchase.price} ₽`;
  }

  onClick(): void {
    this.onItemClick.emit(this.purchase);
  }
}
