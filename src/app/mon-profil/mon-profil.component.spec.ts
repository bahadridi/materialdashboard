import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MonProfilComponent } from "./mon-profil.component";

describe("MonProfilComponent", () => {
  let component: MonProfilComponent;
  let fixture: ComponentFixture<MonProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonProfilComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
