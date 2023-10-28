import { Column } from 'typeorm';

export class Series {
  @Column()
  name!: string;

  @Column()
  bookInSeries?: number;
}
