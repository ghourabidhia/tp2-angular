import {Component, Input, OnInit} from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Subject} from '../domains/subject';
import {SubjectService} from '../services/subject.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Subject[];

  constructor(private _subjectService: SubjectService) {
  }


  ngOnInit() {
    this.posts = this._subjectService.posts;
  }


}
