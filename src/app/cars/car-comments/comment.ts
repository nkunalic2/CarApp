/**
 * Created by nadinak on 11/14/2016.
 */
export class Commentar {
  comment: string;
  date: string;
  constructor (private _comment: string, private _date: string) {
  this.comment = _comment;
  this.date = _date;
}
}
