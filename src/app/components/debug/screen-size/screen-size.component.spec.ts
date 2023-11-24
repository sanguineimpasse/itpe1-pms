import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSizeComponent } from './screen-size.component';

describe('ScreenSizeComponent', () => {
  let component: ScreenSizeComponent;
  let fixture: ComponentFixture<ScreenSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenSizeComponent]
    });
    fixture = TestBed.createComponent(ScreenSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
