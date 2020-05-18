import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmoneycasinoComponent } from './realmoneycasino.component';

describe('RealmoneycasinoComponent', () => {
  let component: RealmoneycasinoComponent;
  let fixture: ComponentFixture<RealmoneycasinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealmoneycasinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmoneycasinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
