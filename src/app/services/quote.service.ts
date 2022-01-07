import { Injectable } from '@angular/core';
import { QUOTES } from 'src/app/mock-quotes';
import {Quote} from '../Quote'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }
  getQuotes(): Observable<Quote[]> {
   const quotes = of(QUOTES);
   return quotes;
  }
}
