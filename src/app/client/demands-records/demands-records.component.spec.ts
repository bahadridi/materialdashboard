import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandsRecordsComponent } from './demands-records.component';

describe('DemandsRecordsComponent', () => {
  let component: DemandsRecordsComponent;
  let fixture: ComponentFixture<DemandsRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandsRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandsRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
