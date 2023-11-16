import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDefaultItemComponent } from './carousel-default-item.component';

describe('CarouselDefaultItemComponent', () => {
  let component: CarouselDefaultItemComponent;
  let fixture: ComponentFixture<CarouselDefaultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselDefaultItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselDefaultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
