import { Component, ViewChild, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { UploaderComponent } from '@syncfusion/ej2-ng-inputs';
import { EmitType, createElement } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-container',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DirectiveComponent {
  @ViewChild('defaultupload')
  public uploadObj: UploaderComponent;
  public path: Object = {
      saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
      removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
  };
  name: string;
  condition = false;
  constructor() {
    this.name = 'Angular2';
  }
}
