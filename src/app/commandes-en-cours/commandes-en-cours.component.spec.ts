import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesEnCoursComponent } from './commandes-en-cours.component';

describe('CommandesEnCoursComponent', () => {
  let component: CommandesEnCoursComponent;
  let fixture: ComponentFixture<CommandesEnCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandesEnCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandesEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
