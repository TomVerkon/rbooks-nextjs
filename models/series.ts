import { prop } from "@typegoose/typegoose";

export class Series {
  @prop()
  name!: string;

  @prop()
  bookInSeries?: number;
}
