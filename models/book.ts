import { ModelOptions,
  Severity,
  getModelForClass,
  index,
  post,
  prop,
} from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { BookType } from './book-type-enum';
import { Owner } from './owner-enum';
import { Reader } from './reader';
import { Series } from './series';

@post<BookClass>('save', function (doc) {
  if (doc) {
    doc.id = doc._id.toString();
    doc._id = doc.id;
  }
})


export class BookClass {
  // @ObjectIdColumn()
  // id?: ObjectId;

  @prop({ required: true })
  title!: string;

  @prop({ required: true })
  sortableTitle!: string;

  @prop({ required: true })
  authors!: string;

  @prop({ required: false })
  series?: Series;

  @prop({ required: true })
  searchableContent!: string;

  @prop({
    enum: BookType,
    default: BookType.KINDLE,
    required: true 
  })
  type!: BookType;

  @prop({   required: true })
  purchaseDate!: Date;

  @prop({
    enum: Owner,
    default: Owner.TVERKON,
    required: true
  })
  owner!: string;

  @prop({
    type: () => [Reader],
    required: true
  })
  readers!: Reader[];

  @prop({ required: true })
  image!: string;

  @prop({   required: true })
  createDt!: Date;

  @prop({ required: true })
  lastUpdatedDt!: Date;
}

