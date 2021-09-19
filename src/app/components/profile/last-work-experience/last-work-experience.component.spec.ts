import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWorkExperienceComponent } from './last-work-experience.component';

describe('LastWorkExperienceComponent', () => {
  let component: LastWorkExperienceComponent;
  let fixture: ComponentFixture<LastWorkExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastWorkExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
