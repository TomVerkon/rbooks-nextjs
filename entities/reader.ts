import { Column } from 'typeorm';

export class Reader {
  @Column()
  name!: string;

  @Column()
  finished!: boolean;

  @Column()
  rating!: number;
}
