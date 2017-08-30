import { CreateTaskComponent } from '../create-task/create-task.component';
import { QueryResult } from 'ng-db-helper';
import { Todo } from '../../core/models/todo';
import { Task } from '../../core/models/task';
import { ModalController, NavParams } from 'ionic-angular';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  public todo: Todo;
  public tasks = <Task[]>[];

  public constructor(
    private navParams: NavParams,
    public modalCtrl: ModalController,
    public changeDetectorRef: ChangeDetectorRef
  ) {
    this.todo = this.navParams.get('todo');
  }

  public ngOnInit() {
    this.refreshTasks();
  }

  private refreshTasks() {
    this.todo.getLinked(Task).subscribe((qr: QueryResult<Task>) => {
      this.tasks = qr.rows.toArray();
      this.changeDetectorRef.detectChanges();
    });
  }

  public createTask() {
    let modal = this.modalCtrl.create(CreateTaskComponent, {
      todo: this.todo
    });
    modal.present();
    modal.onDidDismiss(() => this.refreshTasks());
  }

}
