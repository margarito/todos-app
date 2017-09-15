/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QueryRawComponent } from './query-raw.component';

describe('QueryRawComponent', () => {
  let component: QueryRawComponent;
  let fixture: ComponentFixture<QueryRawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryRawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
