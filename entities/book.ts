import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { BookType } from './book-type-enum';
import { Owner } from './owner-enum';
import { Reader } from './reader';
import { Series } from './series';

@Entity()
export class Book {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  title!: string;

  @Column()
  sortableTitle!: string;

  @Column()
  authors!: string;

  @Column(type => Series)
  series?: Series;

  @Column()
  searchableContent!: string;

  @Column({
    type: 'enum',
    enum: BookType,
    default: BookType.KINDLE
  })
  type!: BookType;

  @Column()
  purchaseDate!: Date;

  @Column({
    type: 'enum',
    enum: Owner,
    default: Owner.TVERKON
  })
  owner!: string;

  @Column()
  readers!: Reader[];

  @Column({})
  image!: string;

  @Column()
  createDt!: Date;

  @Column()
  lastUpdatedDt!: Date;
}

