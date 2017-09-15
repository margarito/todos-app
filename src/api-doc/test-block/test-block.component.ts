import { TestRunner } from '../test-models/test-runner';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test-block',
  templateUrl: './test-block.component.html'
})
export class TestBlockComponent implements OnInit {
  @Input()
  public title: string;

  @Input()
  public testRunner: TestRunner;

  constructor() { }

  ngOnInit() {
  }

}
