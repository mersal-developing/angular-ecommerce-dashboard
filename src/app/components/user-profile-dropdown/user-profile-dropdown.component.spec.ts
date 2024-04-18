import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileDropdownComponent } from './user-profile-dropdown.component';

describe('UserProfileDropdownComponent', () => {
  let component: UserProfileDropdownComponent;
  let fixture: ComponentFixture<UserProfileDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserProfileDropdownComponent]
    });
    fixture = TestBed.createComponent(UserProfileDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
