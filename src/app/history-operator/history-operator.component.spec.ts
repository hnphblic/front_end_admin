import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOperatorComponent } from './history-operator.component';

describe('HistoryComponent', () => {
  let component: HistoryOperatorComponent;
  let fixture: ComponentFixture<HistoryOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
