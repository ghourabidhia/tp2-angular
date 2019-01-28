export class Subject {
  title: string;
  details: string;
  loveIts: number;
  created_at: Date;


  constructor(title: string, details: string, loveIts: number, created_at: Date) {
    this.title = title;
    this.details = details;
    this.loveIts = loveIts;
    this.created_at = created_at;
  }
}
