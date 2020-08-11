import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandsPendingComponent } from './demands-pending.component';

describe('DemandsPendingComponent', () => {
  let component: DemandsPendingComponent;
  let fixture: ComponentFixture<DemandsPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandsPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
