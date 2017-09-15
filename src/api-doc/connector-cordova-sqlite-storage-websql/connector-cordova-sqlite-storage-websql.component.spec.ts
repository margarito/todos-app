/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConnectorCordovaSqliteStorageWebsqlComponent } from './connector-cordova-sqlite-storage-websql.component';

describe('ConnectorCordovaSqliteStorageWebsqlComponent', () => {
  let component: ConnectorCordovaSqliteStorageWebsqlComponent;
  let fixture: ComponentFixture<ConnectorCordovaSqliteStorageWebsqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectorCordovaSqliteStorageWebsqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectorCordovaSqliteStorageWebsqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
