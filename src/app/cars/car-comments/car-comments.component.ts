import { Component, OnInit } from '@angular/core';
import {Commentar} from './comment';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {CommentService} from './comment.service';

@Component({
  selector: 'app-car-comments',
  templateUrl: 'car-comments.component.html',
  styleUrls: ['car-comments.component.css'],
  providers: [CommentService]
})
export class CarCommentsComponent implements OnInit {
  postData: string;
  comments: Commentar[] = [];
  commentForm: FormGroup;
  validated = true;

  constructor( private formBuilder: FormBuilder,
               private _commentService: CommentService) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      commentText: new FormControl('', [<any> Validators.required])
    });
  }

  /*Validation for comment text - required*/
  Validate() {
    if (!this.commentForm.controls['commentText'].valid) {
      this.validated = false;
    }
    else {
      this.validated = true;
      this.callPost();
    }
  }

  /*POSTING commentar using HTTP service and pushing comment to comments array*/
  callPost() {
     this._commentService.postJSON(this.commentForm.controls['commentText'].value).subscribe(res => {
       this.postData = JSON.parse(res['data']);
       this.comments.push(new Commentar(this.postData['comment'], this.postData['date']));
       // reset input value because ng-reflects
       this.commentForm.controls['commentText'].setValue('');
    },
       err => {
         // Log errors if any
         console.log(err);
    });
  }

}
