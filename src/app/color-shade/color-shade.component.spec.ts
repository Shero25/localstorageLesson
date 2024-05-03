import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorShadeComponent } from './color-shade.component';

describe('ColorShadeComponent', () => {
  let component: ColorShadeComponent;
  let fixture: ComponentFixture<ColorShadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorShadeComponent]
    });
    fixture = TestBed.createComponent(ColorShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
