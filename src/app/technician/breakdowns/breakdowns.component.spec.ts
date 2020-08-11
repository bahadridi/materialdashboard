import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownsComponent } from './breakdowns.component';

describe('BreakdownsComponent', () => {
  let component: BreakdownsComponent;
  let fixture: ComponentFixture<BreakdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
