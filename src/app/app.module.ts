import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {NewPostComponent} from './new-post/new-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PostCeluleComponent } from './post-celule/post-celule.component';

const appRoutes: Routes = [
  {path: '', component: PostComponent},
  {path: 'posts', component: PostComponent},
  {path: 'add', component: NewPostComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NewPostComponent,
    NotFoundComponent,
    PostCeluleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
