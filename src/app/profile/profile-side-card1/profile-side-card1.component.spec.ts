import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSideCard1Component } from './profile-side-card1.component';

describe('ProfileSideCard1Component', () => {
  let component: ProfileSideCard1Component;
  let fixture: ComponentFixture<ProfileSideCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSideCard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSideCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
