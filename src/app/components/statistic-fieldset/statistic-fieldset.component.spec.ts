import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticFieldsetComponent } from './statistic-fieldset.component';

describe('StatisticFieldsetComponent', () => {
  let component: StatisticFieldsetComponent;
  let fixture: ComponentFixture<StatisticFieldsetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticFieldsetComponent]
    });
    fixture = TestBed.createComponent(StatisticFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
