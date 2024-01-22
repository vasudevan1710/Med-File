import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpatientaddComponent } from './newpatientadd.component';

describe('NewpatientaddComponent', () => {
  let component: NewpatientaddComponent;
  let fixture: ComponentFixture<NewpatientaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpatientaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpatientaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
