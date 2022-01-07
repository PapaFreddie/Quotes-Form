import { Injectable } from '@angular/core';
import {Quote} from '../Quote'
import { from, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'http://localhost:5000/quotes'

  constructor(private http: HttpClient) { }
  getQuotes(): Observable<Quote[]> {
  return this.http.get<Quote[]>(this.apiUrl);
  }
}
