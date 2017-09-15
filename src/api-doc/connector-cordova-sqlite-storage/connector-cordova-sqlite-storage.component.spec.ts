/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConnectorCordovaSqliteStorageComponent } from './connector-cordova-sqlite-storage.component';

describe('ConnectorCordovaSqliteStorageComponent', () => {
  let component: ConnectorCordovaSqliteStorageComponent;
  let fixture: ComponentFixture<ConnectorCordovaSqliteStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectorCordovaSqliteStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectorCordovaSqliteStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
