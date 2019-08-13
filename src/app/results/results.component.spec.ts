import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('number invalid when empty', () => {
    expect(component.number.valid).toBeFalsy();
  });

  it('number pattern not matching', () => {
    expect(component.number.errors.pattern).toBeFalsy();
  });

  it('min length not matching', () => {
    const num = component.number;
    num.setValue('987654321');
    expect(num.errors.pattern).toBeTruthy();
  });

  it('max length not matching', () => {
    const num = component.number;
    num.setValue('98765432100');
    expect(num.errors.pattern).toBeTruthy();
  });

  it('Characters instaed of number not matching', () => {
    const num = component.number;
    num.setValue('98ab543210');
    expect(num.errors.pattern).toBeTruthy();
  });

  it('getresults function gives desired output', () => {
    component.getresults('4673278945');
    expect(component.result.cost).toBe(1.1);
  });

});
