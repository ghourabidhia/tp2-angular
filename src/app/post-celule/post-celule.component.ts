import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-celule',
  templateUrl: './post-celule.component.html',
  styleUrls: ['./post-celule.component.css']
})
export class PostCeluleComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postLikes: number;
  @Input() date: Date;


  constructor() {
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
  }

  dontLove() {
    this.postLikes--;
  }
}
