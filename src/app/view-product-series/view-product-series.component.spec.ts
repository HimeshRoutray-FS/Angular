import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductSeriesComponent } from './view-product-series.component';

describe('ViewProductSeriesComponent', () => {
  let component: ViewProductSeriesComponent;
  let fixture: ComponentFixture<ViewProductSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
