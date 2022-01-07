import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuoteTypeComponent } from './components/quote-type/quote-type.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';
import { AboutComponent } from './components/about/about.component';
const appRoutes: Routes = [
  {
    path: '', component: QuotesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    QuotesComponent,
    QuoteTypeComponent,
    AddQuoteComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
