import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletItemComponent } from './wallet-item/wallet-item.component';
import { TuiBadgeModule, TuiInputDateModule, TuiInputModule, TuiInputNumberModule, TuiIslandModule, TuiTextAreaModule} from '@taiga-ui/kit';
import { WalletAddComponent } from './wallet-add/wallet-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TuiButtonModule, TuiExpandModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IPurchasesApiServiceToken } from 'src/shared/interfaces/IPurchasesApiService';
import { PurchasesApiService } from 'src/shared/services/purchasesApi.service';
import { HostInterceptor } from 'src/shared/services/HostInterceptor';

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
    {provide: HTTP_INTERCEPTORS, useClass: HostInterceptor, multi: true},
    {provide: IPurchasesApiServiceToken, useClass: PurchasesApiService},
  ]
})
export class WalletModule { }
