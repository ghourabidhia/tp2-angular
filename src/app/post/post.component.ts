import {Component, Input, OnInit} from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {ISubject} from '../domains/isubject';
import {SubjectService} from '../services/subject.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: ISubject[];

  constructor(private _subjectService: SubjectService) {
  }


  ngOnInit() {
    this.posts = this._subjectService.posts;
  }


}
