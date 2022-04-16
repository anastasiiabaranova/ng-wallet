import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletItemComponent } from './wallet-item/wallet-item.component';
import {TuiBadgeModule, TuiInputDateModule, TuiInputModule, TuiInputNumberModule, TuiIslandModule, TuiTextAreaModule} from '@taiga-ui/kit';
import { WalletAddComponent } from './wallet-add/wallet-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButtonModule, TuiExpandModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import { HttpClientModule } from '@angular/common/http';
import { IPurchasesApiServiceToken } from 'src/shared/interfaces/IPurchasesApiService';
import { PurchasesApiService } from 'src/shared/services/purchasesApi.service';

@NgModule({
  declarations: [
    WalletComponent,
    WalletItemComponent,
    WalletAddComponent
  ],
  exports: [
    WalletComponent
  ],
  imports: [
    CommonModule,
    TuiBadgeModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiInputDateModule,
    TuiTextAreaModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiExpandModule,
    HttpClientModule
  ],
  providers: [
    {provide: IPurchasesApiServiceToken, useClass: PurchasesApiService}
  ]
})
export class WalletModule { }
