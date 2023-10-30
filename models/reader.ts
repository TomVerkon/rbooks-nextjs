import { prop } from "@typegoose/typegoose";

export class Reader {
  @prop()
  name!: string;

  @prop()
  finished!: boolean;

  @prop()
  rating!: number;
}
