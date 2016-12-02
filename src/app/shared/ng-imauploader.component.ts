/**
 * Created by nadinak on 12/2/2016.
 */
import { Component } from '@angular/core';
import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';

@Component({
  selector: 'example-app',
  template: '<fancy-image-uploader [options]="options" (onUpload)="onUpload($event)"></fancy-image-uploader>'
})
export class NgUploaderComponent {
  options: FancyImageUploaderOptions = {
    thumbnailHeight: 170,
    thumbnailWidth: 150,
    uploadUrl: 'http://cors.io/?http://www.posttestserver.com/',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
  };

  onUpload(file: UploadedFile) {
    console.log(file.response);
  }
}
