import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualregistrationComponent } from './manualregistration.component';

describe('ManualregistrationComponent', () => {
  let component: ManualregistrationComponent;
  let fixture: ComponentFixture<ManualregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
