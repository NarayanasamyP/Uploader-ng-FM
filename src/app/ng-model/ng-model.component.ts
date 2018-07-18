import { Component, ViewChild, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { UploaderComponent } from '@syncfusion/ej2-ng-inputs';
import { EmitType, createElement } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-container',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css'],
  styles: ['.e-upload { width: 400px;}'],
  encapsulation: ViewEncapsulation.None
})
export class ModelComponent {
    public maxFile: number;
@ViewChild('defaultupload')
public uploadObj: UploaderComponent;
public path: Object = {
    saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
};
}
