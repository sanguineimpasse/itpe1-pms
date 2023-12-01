import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListItemComponent } from './dashboard-list-item.component';

describe('DashboardListItemComponent', () => {
  let component: DashboardListItemComponent;
  let fixture: ComponentFixture<DashboardListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardListItemComponent]
    });
    fixture = TestBed.createComponent(DashboardListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
