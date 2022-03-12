import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDealersComponent } from './get-all-dealers.component';

describe('GetAllDealersComponent', () => {
  let component: GetAllDealersComponent;
  let fixture: ComponentFixture<GetAllDealersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllDealersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllDealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
