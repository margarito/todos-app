/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClauseCompositeComponent } from './clause-composite.component';

describe('ClauseCompositeComponent', () => {
  let component: ClauseCompositeComponent;
  let fixture: ComponentFixture<ClauseCompositeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClauseCompositeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClauseCompositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
