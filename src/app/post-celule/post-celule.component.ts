import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {SubjectService} from '../services/subject.service';

@Component({
  selector: 'app-post-celule',
  templateUrl: './post-celule.component.html',
  styleUrls: ['./post-celule.component.css']
})
export class PostCeluleComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postLikes: number;
  @Input() date: Date;
  @Input() postDetails: string;
  @Input() index: number;


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
}
