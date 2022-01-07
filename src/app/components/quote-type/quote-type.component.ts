import { Quote } from '../../Quote';
import { Component, OnInit, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-quote-type',
  templateUrl: './quote-type.component.html',
  styleUrls: ['./quote-type.component.css']
})
export class QuoteTypeComponent implements OnInit {
  @Input() quote!: Quote;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
