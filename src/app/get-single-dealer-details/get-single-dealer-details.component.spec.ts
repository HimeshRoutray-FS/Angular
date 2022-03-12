import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleDealerDetailsComponent } from './get-single-dealer-details.component';

describe('GetSingleDealerDetailsComponent', () => {
  let component: GetSingleDealerDetailsComponent;
  let fixture: ComponentFixture<GetSingleDealerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSingleDealerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSingleDealerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
