import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecasinoComponent } from './mobilecasino.component';

describe('MobilecasinoComponent', () => {
  let component: MobilecasinoComponent;
  let fixture: ComponentFixture<MobilecasinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilecasinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecasinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
