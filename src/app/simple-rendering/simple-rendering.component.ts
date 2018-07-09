import { Component, ViewChild, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { UploaderComponent } from '@syncfusion/ej2-ng-inputs';
import { EmitType, createElement } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-container',
  templateUrl: './simple-rendering.component.html',
  styleUrls: ['./simple-rendering.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleComponent {
  @ViewChild('defaultupload')
  public uploadObj: UploaderComponent;
  public path: Object = {
      saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
      removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
  };
}
