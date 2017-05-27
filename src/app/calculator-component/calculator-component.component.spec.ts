import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponentComponent } from './calculator-component.component';

describe('CalculatorComponentComponent', () => {
  let component: CalculatorComponentComponent;
  let fixture: ComponentFixture<CalculatorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
