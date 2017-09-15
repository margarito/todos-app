/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QueryInsertComponent } from './query-insert.component';

describe('QueryInsertComponent', () => {
  let component: QueryInsertComponent;
  let fixture: ComponentFixture<QueryInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
