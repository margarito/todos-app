import { Column, DbHelperModel, PrimaryKey, Table } from 'ng-db-helper';

@Table({name: 'categories'})
export class Category extends DbHelperModel {
    
    @PrimaryKey()
    public name: string;

    @Column()
    public description: string;
}
