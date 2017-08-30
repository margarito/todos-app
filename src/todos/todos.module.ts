import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  imports: [
    SharedModule,
    IonicModule.forRoot(TodosModule)
  ],
  exports: [
    CreateTodoComponent,
    CreateCategoryComponent
  ],
  declarations: [
    CreateTodoComponent,
    CreateCategoryComponent,
    TaskListComponent,
    CreateTaskComponent
],
  entryComponents: [
    CreateTodoComponent,
    CreateCategoryComponent,
    TaskListComponent,
    CreateTaskComponent
  ]
})
export class TodosModule { }