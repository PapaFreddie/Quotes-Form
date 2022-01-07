import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddQuote:boolean = false;
  private subject =  new Subject<any>();
  constructor() { }

  toggleAddQuote(): void {
    this.showAddQuote = !this.showAddQuote;
    this.subject.next(this.showAddQuote);
  }
}
