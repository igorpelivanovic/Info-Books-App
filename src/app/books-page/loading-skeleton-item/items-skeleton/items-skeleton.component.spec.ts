import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSkeletonComponent } from './items-skeleton.component';

describe('ItemsSkeletonComponent', () => {
  let component: ItemsSkeletonComponent;
  let fixture: ComponentFixture<ItemsSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
