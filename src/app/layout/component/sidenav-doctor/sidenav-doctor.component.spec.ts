import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDoctorComponent } from './sidenav-doctor.component';

describe('SidenavDoctorComponent', () => {
  let component: SidenavDoctorComponent;
  let fixture: ComponentFixture<SidenavDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavDoctorComponent]
    });
    fixture = TestBed.createComponent(SidenavDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
