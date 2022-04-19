import {Observable} from 'rxjs';
import {Purchase} from '../models/Purchase';
import {InjectionToken} from '@angular/core';

export const IPurchasesApiServiceToken = new InjectionToken('IPurchasesApiService');

export interface IPurchasesApiService {
  getAll(): Observable<Purchase[]>;

  add(purchase: Purchase): Observable<void>;

  edit(purchase: Purchase): Observable<void>;

  delete(id: string): Observable<void>;
}