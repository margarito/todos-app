import { Column, DbHelperModel, PrimaryKey, Table } from 'ng-db-helper';

@Table({name: 'notes'})
export class Note extends DbHelperModel{
    @PrimaryKey({autoIncrement: true})
    public id: number;

    @Column()
    public title: string;

    @Column()
    public content: string;
}
