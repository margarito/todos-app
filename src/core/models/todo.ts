import { Category } from './category';
import { Column, DbHelperModel, ForeignModel, PrimaryKey, Table } from 'ng-db-helper';

@Table({name: 'todos'})
export class Todo extends DbHelperModel {

    @PrimaryKey({autoIncrement: true})
    public id: number

    @ForeignModel(Category)
    public category: Category;

    @Column()
    public name: string;

    @Column({type: 'long'})
    public dueDate: number;

    @Column({type: 'boolean'})
    public isDone: boolean;
}
