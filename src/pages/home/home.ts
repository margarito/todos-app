import { TaskListComponent } from '../../todos/task-list/task-list.component';
import { CreateCategoryComponent } from '../../todos/create-category/create-category.component';
import { CreateTodoComponent } from '../../todos/create-todo/create-todo.component';
import { Todo } from '../../core/models/todo';
import { Category } from '../../core/models/category';
import { QueryResult, Select } from 'ng-db-helper';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public categories: Category[];
  public categorizedTodo = <{[index:number]: Todo[]}>{};
  public updatingTodos = <{[index: number]: boolean}>{}

  public constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public changeDetectorRef: ChangeDetectorRef
  ) {

  }

  public ngOnInit() {
    this.refreshTodos();
  }

  public openTasksFor(todo: Todo) {
    this.navCtrl.push(TaskListComponent, {
      todo: todo
    });
  }

  public createTodo() {
    let modal = this.modalCtrl.create(CreateTodoComponent);
    modal.present();
    modal.onDidDismiss(() => this.refreshTodos());
  }

  public createCategory() {
    let modal = this.modalCtrl.create(CreateCategoryComponent);
    modal.present();
    modal.onDidDismiss(() => this.refreshTodos());
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
    title: 'Create item',
    buttons: [
      {
        text: 'Create category',
        handler: () => this.createCategory()
      },
      {
        text: 'Create todo',
        handler: () => this.createTodo()
      },
      {
        text: 'Cancel',
        role: 'cancel',
      }
     ]
   });

   actionSheet.present();
  }

  public notifyToggleChange(todo: Todo) {
    const newVal = todo.isDone;
    if (this.updatingTodos.hasOwnProperty(todo.id)) {
      todo.isDone = this.updatingTodos[todo.id];
    } else {
      this.updatingTodos[todo.id] = newVal;
      todo.save().subscribe(() => {
        // isDone ha its new value
      },(err) => console.error(err), () => {
        delete this.updatingTodos[todo.id];
      });
    }
  }

  private refreshTodos() {
    this.categorizedTodo = <{[index:number]: Todo[]}>{};
    Select(Category).exec().subscribe((qr: QueryResult<Category>) => {
      this.categories = qr.rows.toArray();
      this.changeDetectorRef.detectChanges();
      const names = <string[]>[];
      for (const category of this.categories) {
        names.push(category.name);
      }
      Select(Todo).where({categoryName__in: names}).exec().subscribe((todoQr: QueryResult<Todo>) => {
        for (let i = 0; i < todoQr.rows.length; i++) {
          const todo = todoQr.rows.item(i);
          const categoryName = todo.getColumnValue('categoryName');
          if (!this.categorizedTodo[categoryName]) {
            this.categorizedTodo[categoryName] = <Todo[]>[];
          }
          this.categorizedTodo[categoryName].push(todo);
        }
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.error(err);
      })
    }, (err) => {
      console.error(err);
    });
  }
}
