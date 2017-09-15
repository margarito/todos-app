import { Column, DbHelperModel, PrimaryKey, Table } from 'ng-db-helper';

@Table({name: 'animals'})
export class Animal extends DbHelperModel {
    @PrimaryKey({autoIncrement: true})
    public id: number

    @Column()
    public species: string;

    @Column()
    public breed: string;

    @Column()
    public color: string;

    @Column()
    public name: string;

    @Column({type: 'number'})
    public age: number;

    @Column({type: 'boolean'})
    public isAdopted = false;

    public static random(): Animal {
        const species = ['dog', 'cat', 'bird', 'lezard', 'snake', 'turtle', 'fish'];
        const breeds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
        const colors = ['red', 'blue', 'green', 'black', 'white', 'grey', 'pink'];
        const names = ['medor', 'bill', 'sugar', 'mickey', 'balki', 'texas', 'opal']
        const animal = new Animal();
        animal.species = species[Math.floor(Math.random() * species.length)]
        animal.breed = breeds[Math.floor(Math.random() * breeds.length)]
        animal.name = names[Math.floor(Math.random() * names.length)]
        animal.color = colors[Math.floor(Math.random() * colors.length)]
        animal.age = Math.round(Math.random() * 20);
        animal.isAdopted = Math.round(Math.random()) === 0;
        return animal;
    }

    public toKeyValue(): {[index: string]: any} {
        const kv = {};

        for (const key in this.$$shadow) {
            if (this.$$shadow.hasOwnProperty(key)) {
                kv[key] = this.$$shadow[key].val;
            }
        }
        return kv;
    }
}
