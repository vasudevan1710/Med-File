import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilldischargeComponent } from './billdischarge.component';

describe('BilldischargeComponent', () => {
  let component: BilldischargeComponent;
  let fixture: ComponentFixture<BilldischargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilldischargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilldischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
