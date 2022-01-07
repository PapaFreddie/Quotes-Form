import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteTypeComponent } from './quote-type.component';

describe('QuoteTypeComponent', () => {
  let component: QuoteTypeComponent;
  let fixture: ComponentFixture<QuoteTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
