import { ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TestStep } from './test-step';

export class TestRunner {
    public steps = <TestStep[]>[];
    public state = 'READY';

    public constructor(private chgDetectorRef: ChangeDetectorRef) {}

    public addStep(step: TestStep): TestRunner {
        this.steps.push(step);
        return this;
    }

    public run(): Observable<any> {
        if (this.state === 'RUNNING') return;
        this.state = 'RUNNING';
        if (!this.steps) {
            throw new Error('At least onse step should be added');
        }
        let observable = this.steps[0].run(null, this.chgDetectorRef);
        for (let i = 1; i < this.steps.length; i++) {
            observable = this.getNextObservable(observable, i);
        }
        observable.share().subscribe((res) => {
            this.state = 'SUCCESS';
            this.chgDetectorRef.detectChanges();
        }, (err) => {
            this.state = 'FAIL';
            this.chgDetectorRef.detectChanges();
            console.error(err);
        });

        return observable;
    }

    private getNextObservable(observable: Observable<any>, index: number): Observable<any> {
        return observable.switchMap((res) => this.steps[index].run(res, this.chgDetectorRef));
        /**return Observable.create((observer: Observer<any>) => {
            observable.subscribe((res) => {
                this.steps[index].run(res, this.chgDetectorRef).subscribe(observer);
            }, (err) => observer.error(err));
        });**/
    }
}
