import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {SubjectService} from '../services/subject.service';

@Component({
  selector: 'app-post-celule',
  templateUrl: './post-celule.component.html',
  styleUrls: ['./post-celule.component.css']
})
export class PostCeluleComponent implements OnInit, OnDestroy {

  @Input() postTitle: string;
  @Input() postLikes: number;
  @Input() date: Date;
  @Input() postDetails: string;
  @Input() index: number;
  counterSubscription: Subscription;


  constructor(private _subjectService: SubjectService) {
  }

  ngOnInit() {
  }

  getColor() {
    if (this.postLikes > 0) {
      return 'lightgreen';
    }
    if (this.postLikes < 0) {
      return 'pink';
    }
  }

  love() {
    this.postLikes++;
    this._subjectService.saveLoves(this.index, this.postLikes);
    console.log(this._subjectService.saveLoves(this.index, this.postLikes));
  }

  dontLove() {
    this.postLikes--;
    this._subjectService.saveLoves(this.index, this.postLikes);
    console.log(this._subjectService.saveLoves(this.index, this.postLikes));
  }

  deleteItem() {
    this._subjectService.deleteSubject(this.index);
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
