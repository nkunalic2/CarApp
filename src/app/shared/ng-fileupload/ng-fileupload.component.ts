

import {Component} from "@angular/core";
import {SignupService} from "../../signup/signup.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'file-uploader',
  templateUrl: './ng-fileupload.component.html',
  styleUrls: ['./ng-fileupload.component.css'],
  inputs:['activeColor','baseColor','overlayColor']
})
export class FileUploaderComponent {
  stepTwoForm: FormGroup;
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';

  constructor(private signupService: SignupService){}
  ngOnInit() {
    this.stepTwoForm=<FormGroup>this.signupService.signUpForm.controls['stepTwoForm'];
  }
  handleDragEnter() {
    this.dragging = true;
  }

  handleDragLeave() {
    this.dragging = false;
  }

  handleDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e);
  }

  handleImageLoad() {
    this.imageLoaded = true;
    // this.iconColor = this.overlayColor;
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    var reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
  }

  _setActive() {
    // this.borderColor = this.activeColor;
    // if (this.imageSrc.length === 0) {
    //   this.iconColor = this.activeColor;
    // }
  }

  _setInactive() {
    // this.borderColor = this.baseColor;
    // if (this.imageSrc.length === 0) {
    //   this.iconColor = this.baseColor;
    // }
  }

}/**
 * Created by nadinak on 12/5/2016.
 */
