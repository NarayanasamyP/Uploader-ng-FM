import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UploaderComponent, FormValidator } from '@syncfusion/ej2-ng-inputs';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
 
class User {
  constructor(
    // public time: Date,
    public fileName: string,
  ) {}
}

@Component({
  selector: 'sample',
  styleUrls: ['./template-driven.component.css'],
  templateUrl:'./template-driven.component.html' 
})

export class TemplateDrivenComponent {
  @ViewChild('formUpload')
  public uploadObj: UploaderComponent;
  @ViewChild('confirmDialog')
  public dialogObj: DialogComponent;
  public content: string = 'Form submitted successfully';
  public buttons: Object = [{'click': this.onClick.bind(this), buttonModel: { content: 'OK', cssClass: 'e-flat', isPrimary: true}}];
  public visiblity: boolean = false;
  public showCloseIcon: boolean = true;

   user: User;
  
  ngOnInit() {
    this.user = new User(null);
  }
  onClick(){
    this.dialogObj.hide();
  }
  onSubmit() {
    if (!isNullOrUndefined(this.user.fileName)) {
      this.dialogObj.show();
      let formObject: FormValidator = new FormValidator("form");
      formObject.element.reset();   
      this.uploadObj.clearAll();
    } else {
      return false;
    }
  }

  onFileSelect(args: any) {
      this.user.fileName = args.filesData[0].name;
  }
}
