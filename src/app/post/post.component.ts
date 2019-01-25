import {Component, Input, OnInit} from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  lastDate = new Date();

  posts = [
    {
      title: 'Mon premier post',
      loveIts: 4,
      created_at: this.lastDate
    },
    {
      title: 'Mon deuxieme post',
      loveIts: -7,
      created_at: this.lastDate

    },
    {
      title: 'Mon troisieme post',
      loveIts: 0,
      created_at: this.lastDate

    },
  ];

  @Input() postTitle: string;
  @Input() postLikes: number;
  @Input() date: Date;


  constructor() {
  }

  ngOnInit() {
  }


}
