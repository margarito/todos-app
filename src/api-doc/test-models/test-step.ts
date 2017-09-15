import { ChangeDetectorRef } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

import 'rxjs/operator/concatMap';

export class TestStep {
  public state = 'READY';
  public markdown: string;
  public test: (prevResult: any) => Observable<any>;
  public result: string;
  public duration: string;

  public setMarkdown(markdown: string): TestStep {
    this.markdown = markdown;
    return this;
  }
  public setTest(test: (prevResult: any) => Observable<any>): TestStep {
    this.test = test;
    return this;
  }

  public run(prevResult: any, chgDetectorRef: ChangeDetectorRef): Observable<any> {
    this.state = 'RUNNING';
    const start = (new Date()).getTime();
    chgDetectorRef.detectChanges();
    const subject = new Subject<any>();
    this.test(prevResult).map((res) => {
      if (res) {
        if (res instanceof String) {
          this.result = res as string;
        } else {
          this.result = JSON.stringify(res);
        }
      }
      this.duration = ((new Date()).getTime() - start) + 'ms';
      return res;
    }).subscribe(
      (res) => {
        this.state = 'SUCCESS';
        chgDetectorRef.detectChanges();
        subject.next(res)
      },
      (err) => {
        this.state = 'FAIL';
        chgDetectorRef.detectChanges();
        subject.error(err)
      },
      () => subject.complete()
    );
    return subject;
  }
}
