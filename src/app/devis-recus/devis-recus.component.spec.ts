import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisRecusComponent } from './devis-recus.component';

describe('DevisRecusComponent', () => {
  let component: DevisRecusComponent;
  let fixture: ComponentFixture<DevisRecusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisRecusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisRecusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
