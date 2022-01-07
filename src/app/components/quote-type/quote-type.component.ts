import { Quote } from '../../Quote';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-quote-type',
  templateUrl: './quote-type.component.html',
  styleUrls: ['./quote-type.component.css']
})
export class QuoteTypeComponent implements OnInit {
  @Input() quote!: Quote;
  faTimes = faTimes;
  @Output() onDeleteQuote: EventEmitter<Quote> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(quote: any){
    this.onDeleteQuote.emit(quote);
  }

}
