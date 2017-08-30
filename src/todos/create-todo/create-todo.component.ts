import { QueryResult, Select } from 'ng-db-helper';
import { NavParams, Platform, ViewController } from 'ionic-angular';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Category } from '../../core/models/category';
import { Todo } from '../../core/models/todo';
import * as moment from 'moment';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html'
})
export class CreateTodoComponent implements OnInit {
  public minDate = moment().toISOString();
  public maxDate = moment().add(10, 'years').toISOString();
  public category: Category;
  public dueDate = moment().add(5, 'days').toISOString();;
  public categories = <Category[]>[];
  public todo: Todo;
  public error: string;

  public constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public changeDetectorRef: ChangeDetectorRef
  ) { }

  public ngOnInit() {
    if (!this.todo) {
      this.todo = new Todo();
    }
    this.loadCategories();
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

  public compareCategory(cat1: Category, cat2: Category): boolean {
    return cat1 && cat2 ? cat1.name === cat2.name : cat1 === cat2;
  }

  public save() {
    if (!this.isTodoValid()) {
      return;
    }
    if (this.dueDate) {
      this.todo.dueDate = moment(this.dueDate).unix();
    }
    if (this.category) {
      this.todo.category = this.category;
    }
    this.todo.save().subscribe(() => {
      this.viewCtrl.dismiss();
    }, (err) => {
      console.error(err);
      // if an error occur, its probably because category name is taken
    });
  }

  public emptyDate() {
    this.dueDate = null;
  }

  private isTodoValid(): boolean {
    if (!this.category) {
      this.error = 'You must choose a category !';
      return false;
    }
    if (!this.todo.name) {
      this.error = 'You must fill a name !';
      return false;
    }
    if (this.dueDate) {
      const date = moment(this.dueDate);
      if (!date.isValid() || date.isBefore(moment())) {
        this.error = 'Due date must be in the future, change it or remove it.';
        return false;
      }
    }
    return true;
  }

  private loadCategories() {
    Select(Category).exec().subscribe((qr: QueryResult<Category>) => {
      this.categories = qr.rows.toArray();
      this.changeDetectorRef.detectChanges();
    }, (err: any) => {
      console.error(err);
    });
  }

}
