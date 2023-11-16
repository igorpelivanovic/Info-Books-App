import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksItemComponent } from './books-item.component';

describe('BooksItemComponent', () => {
  let component: BooksItemComponent;
  let fixture: ComponentFixture<BooksItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
