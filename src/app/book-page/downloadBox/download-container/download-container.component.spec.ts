import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadContainerComponent } from './download-container.component';

describe('DownloadContainerComponent', () => {
  let component: DownloadContainerComponent;
  let fixture: ComponentFixture<DownloadContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
