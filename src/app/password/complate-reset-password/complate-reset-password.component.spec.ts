import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplateResetPasswordComponent } from './complate-reset-password.component';

describe('ComplateResetComponent', () => {
  let component: ComplateResetPasswordComponent;
  let fixture: ComponentFixture<ComplateResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplateResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplateResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
