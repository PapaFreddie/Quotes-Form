import { Component, OnInit } from '@angular/core';
import {Quote} from '../../Quote'
import { QuoteService } from 'src/app/services/quote.service';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
//import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe((quotes) => (this.quotes = quotes));
  }

  deleteQuote(quote: Quote) {
    this.quoteService.deleteQuote(quote).subscribe(()=> (this.quotes = this.quotes.filter(t => t.id !== quote.id)));


  }
  addQuote(quote: Quote) {
    this.quoteService.addQuote(quote).subscribe((quote) => (this.quotes.push(quote)));
  }


}
