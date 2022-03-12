import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDealerDetailsComponent } from './get-dealer-details.component';

describe('GetDealerDetailsComponent', () => {
  let component: GetDealerDetailsComponent;
  let fixture: ComponentFixture<GetDealerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDealerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDealerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
