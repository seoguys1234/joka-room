import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineslotsComponent } from './onlineslots.component';

describe('OnlineslotsComponent', () => {
  let component: OnlineslotsComponent;
  let fixture: ComponentFixture<OnlineslotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineslotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
