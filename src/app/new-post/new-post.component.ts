import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ISubject} from '../domains/isubject';
import {SubjectService} from '../services/subject.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  date: Date = new Date();

  subjectForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private _subjectService: SubjectService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.subjectForm = this._formBuilder.group({
      title: ['', Validators.required],
      details: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.subjectForm.value;
    const newSubject: ISubject = new ISubject(
      formValue['title'],
      formValue['details'],
      0,
      this.date
    );
    this._subjectService.addSubject(newSubject);
    this._router.navigate(['/posts']);

  }

}
