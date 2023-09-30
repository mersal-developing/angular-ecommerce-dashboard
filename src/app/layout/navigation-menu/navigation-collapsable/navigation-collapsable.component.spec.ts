import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCollapsableComponent } from './navigation-collapsable.component';

describe('NavigationCollapsableComponent', () => {
  let component: NavigationCollapsableComponent;
  let fixture: ComponentFixture<NavigationCollapsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavigationCollapsableComponent]
    });
    fixture = TestBed.createComponent(NavigationCollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
