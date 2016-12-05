/**
 * Created by nadinak on 12/5/2016.
 */

//our root app component
import {Component, NgModule, ChangeDetectorRef} from '@angular/core'
import {SignupService} from "../../signup/signup.service";
import {FormGroup} from "@angular/forms";
// import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'ng-avatar',
  templateUrl: 'ng-avatar.component.html'
})
export class NgAvatarComponent {
  public file_srcs: string[] = [];
  public src_file:string="http://2.bp.blogspot.com/-KLcHPORC4do/TbJCkjjkiBI/AAAAAAAAACw/zDnMSWC_R0M/w1200-h630-p-nu/facebook-no-image1.gif";
  stepTwoForm: FormGroup;
  constructor( private changeDetectorRef: ChangeDetectorRef, private signupService: SignupService ) {
  }
  ngOnInit() {
    this.stepTwoForm=<FormGroup>this.signupService.signUpForm.controls['stepTwoForm'];
  }

  // This is called when the user selects new files from the upload button
  fileChange(input){
    this.readFiles(input.files);
    this.src_file=this.file_srcs[0];
  }

  readFile(file, reader, callback){
    // Set a callback funtion to fire after the file is fully loaded
    reader.onload = () => {
      // callback with the results
      callback(reader.result);
    }

    // Read the file
    reader.readAsDataURL(file);
  }

  readFiles(files, index=0){
    // Create the file reader
    let reader = new FileReader();

    // If there is a file
    if ( index in files ){
      // Start reading this file
      this.readFile(files[index], reader, (result) =>{
        // After the callback fires do:
        this.file_srcs.push(result);
        this.src_file=result;
        // this.stepTwoForm.setValue({birthDay:"haa", birthPlace:"place", profilePic:'Hello', comment:"comm"});
        this.readFiles(files, index+1);// Read the next file;
      });
    }else{
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }

}


