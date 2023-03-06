import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceCardComponent } from './conference-card.component';

describe('ConferenceCardComponent', () => {
  let component: ConferenceCardComponent;
  let fixture: ComponentFixture<ConferenceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferenceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
