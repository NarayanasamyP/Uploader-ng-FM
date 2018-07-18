import {Component, ViewChild, TemplateRef} from '@angular/core';
import { UploaderComponent } from '@syncfusion/ej2-ng-inputs';

@Component({
  selector: 'child-container',
  template: `
      <ejs-uploader #fileUpload id="Uploader" [asyncSettings]='path'  [autoUpload]= false ></ejs-uploader>
  `,
})
export class Newcomponent {
    @ViewChild('fileUpload')
    public itemTemplate: UploaderComponent;
    public path: Object = {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
    };
    constructor() {
    }
}
