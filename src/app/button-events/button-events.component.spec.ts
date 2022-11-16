import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEventsComponent } from './button-events.component';

describe('ButtonEventsComponent', () => {
  let component: ButtonEventsComponent;
  let fixture: ComponentFixture<ButtonEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
