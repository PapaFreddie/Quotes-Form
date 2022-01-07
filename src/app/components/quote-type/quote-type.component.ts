import { Quote } from '../../Quote';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-type',
  templateUrl: './quote-type.component.html',
  styleUrls: ['./quote-type.component.css']
})
export class QuoteTypeComponent implements OnInit {
  @Input() quote!: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
