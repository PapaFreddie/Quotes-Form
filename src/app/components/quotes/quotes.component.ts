import { Component, OnInit } from '@angular/core';
import { QUOTES } from 'src/app/mock-quotes';
import {Quote} from '../../Quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = QUOTES;

  constructor() { }

  ngOnInit(): void {
  }

}
