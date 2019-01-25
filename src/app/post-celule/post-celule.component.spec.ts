import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCeluleComponent } from './post-celule.component';

describe('PostCeluleComponent', () => {
  let component: PostCeluleComponent;
  let fixture: ComponentFixture<PostCeluleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCeluleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCeluleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
