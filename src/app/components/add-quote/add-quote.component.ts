import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from '../../Quote';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  text!: string;
  author!: string;
  inspirational: boolean = false;
  @Output() onAddQuote: EventEmitter<Quote> = new EventEmitter();
  showAddQuote!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddQuote = value)

  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text) {
      alert('Please! Add quote to proceed >>>');
      return;
    }
    const newQuote = {
      text: this.text,
      author: this.author,
      inspirational: this.inspirational,
    };

    this.onAddQuote.emit(newQuote);
    
    this.text = '';
    this.author = '';
    this.inspirational = false;
  }

}
