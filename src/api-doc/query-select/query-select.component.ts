import { Animal } from '../test-models/animal';
import { Delete, Insert, QueryResult, Select } from 'ng-db-helper';
import { TestStep } from '../test-models/test-step';
import { TestRunner } from '../test-models/test-runner';
import { Observable } from 'rxjs/Rx';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-select',
  templateUrl: './query-select.component.html'
})
export class QuerySelectComponent implements OnInit {
  public test1Runner = (new TestRunner(this.chgDetectorRef))
    .addStep((new TestStep())
      .setMarkdown('Insert test data')
      .setTest((prevRes: any): Observable<any> => {
        const animals = <Animal[]>[];
        for (let i = 0; i < 5; i++) {
          animals.push(Animal.random());
        }
        return Insert(animals).exec().map(() => {
          const shadows = [];
          for (const animal of animals) {
            shadows.push(animal.toKeyValue());
          }
          return 'Inserted data: ' + JSON.stringify(shadows);
        });
      }))
    .addStep((new TestStep())
      .setMarkdown('\n```typescript\n\nSelect(Animal).exec().subscribe((qr: QueryResult<Animal>) => {\n\
  // display result\n \}, (err) => { console.error(err); });\n\n ```\n')
      .setTest((prevRes: any): Observable<any> => {
        return Select(Animal).exec().map((qr: QueryResult<Animal>) => {
          const res = [];
          for (let i = 0; i < qr.rows.length; i++) {
            const animal = qr.rows.item(i);
            res.push(animal.toKeyValue());
          }
          return res;
        });
      }))
    .addStep((new TestStep())
      .setMarkdown('Remove test data')
      .setTest((prevRes: any): Observable<any> => {
        return Delete(Animal).exec().map(() => null);
      }));

  constructor(private chgDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

}
