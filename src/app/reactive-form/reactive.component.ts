import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UploaderComponent, FormValidator } from '@syncfusion/ej2-ng-inputs';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';


@Component({
  selector: 'about',
  styleUrls: ['./reactive.component.css'],
  templateUrl: './reactive.component.html'
})
export class ReactiveComponent {
  form: FormGroup;
  @ViewChild('formUpload')
  public uploadObj: UploaderComponent;
  @ViewChild('confirmDialog')
  public dialogObj: DialogComponent;
  public content: string = 'Form submitted successfully';
  public buttons: Object = [{'click': this.onClick.bind(this), buttonModel: { content: 'OK', cssClass: 'e-flat', isPrimary: true}}];
  public visiblity: boolean = false;
  public showCloseIcon: boolean = true;

  constructor(private formBuilder: FormBuilder) { }
  onSubmit() {
    if (this.form.valid) {
      this.dialogObj.show();
      let formObject: FormValidator = new FormValidator("form");
      formObject.element.reset();   
      this.uploadObj.clearAll();
    }
  }

  onFileSelect(args: any) {
    this.form.patchValue({
      upload: args.filesData[0].name
   });
  }

  onClick(){
    this.dialogObj.hide();
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      upload: [null, [Validators.required]],
    });
  }

}