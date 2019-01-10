import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typeBlog';
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

}
