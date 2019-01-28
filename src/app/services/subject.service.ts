import {Injectable} from '@angular/core';
import {Subject} from '../domains/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  lastDate = new Date();


  posts: Subject[] = [
    {
      title: 'Mon premier post',
      details: 'Not him old music think his found enjoy merry. Listening acutenessdependent at or an. Apartments thoroughly',
      loveIts: 4,
      created_at: this.lastDate
    },
    {
      title: 'Mon deuxieme post',
      details: 'unsatiable terminated sex how themselves. She are ten hours wrong walls stand early. Domestic perceive on an\n' +
      '      ladyship extended received do. Why jennings our whatever his learning gay perceive',
      loveIts: -7,
      created_at: this.lastDate

    },
    {
      title: 'Mon troisieme post',
      details: 'Is against no he without  subject. Bed connection unreserved preference partiality not unaffected.' +
      ' Years merit trees so think in hoped we as.',
      loveIts: 0,
      created_at: this.lastDate

    },
  ];

  constructor() {
  }

  saveLoves(index: number, nbLoves: number): number {
    this.posts[index].loveIts = nbLoves;
    return this.posts[index].loveIts;
  }

  addSubject(subject: Subject) {
    this.posts.push(subject);
  }

  deleteSubject(index: number) {
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }


}
