import { Note } from './note';
import { Todo } from './todo';
import { Column, DbHelperModel, ForeignModel, PrimaryKey, Table } from 'ng-db-helper';

@Table({name: 'tasks'})
export class Task extends DbHelperModel {

    @PrimaryKey({autoIncrement: true})
    public id: number

    @ForeignModel(Todo)
    public todo: Todo;

    @ForeignModel(Note)
    public note: Note;

    @Column()
    public name: string;

    @Column({type: 'long'})
    public dueDate: number;

    @Column({type: 'boolean'})
    public iSDone: boolean;
}

