import {Component, ViewChild, TemplateRef} from '@angular/core';
import { UploaderComponent } from '@syncfusion/ej2-ng-inputs';

@Component({
  selector: 'app-container',
  template: `
      <ejs-uploader #fileUpload id="Uploader" autoUpload='false'></ejs-uploader>
  `,
})
export class Newcomponent {
    @ViewChild('fileUpload')
    public itemTemplate: UploaderComponent;
    constructor() {
    }
}
