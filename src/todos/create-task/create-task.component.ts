import { NavParams, ViewController } from 'ionic-angular';
import { Task } from '../../core/models/task';
import { Todo } from '../../core/models/todo';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent implements OnInit {
  public task: Task;
  public todo: Todo;
  public minDate = moment().toISOString();
  public maxDate = moment().add(10, 'years').toISOString();
  public dueDate = moment().add(5, 'days').toISOString();
  public error: string;

  public constructor(
    public viewCtrl: ViewController,
    public changeDetectorRef: ChangeDetectorRef,
    params: NavParams
  ) {
    this.todo = params.get('todo');
    if (this.todo.dueDate) {
      this.maxDate = moment(this.todo.dueDate * 1000).toISOString();
      this.dueDate = moment(this.todo.dueDate * 1000).toISOString();
    }
    
  }

  public ngOnInit() {
    if (!this.task) {
      this.task = new Task();
    }
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

  public save() {
    if (!this.isTodoValid()) {
      this.changeDetectorRef.detectChanges();
      return;
    }
    if (this.dueDate) {
      this.task.dueDate = moment(this.dueDate).unix();
    }
    if (this.todo) {
      this.task.todo = this.todo;
    }
    this.task.save().subscribe(() => {
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
    if (!this.task.name) {
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

}
