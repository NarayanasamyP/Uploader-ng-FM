import { Component, ViewChild, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { DependService } from './dependent.service';
import { UploaderComponent } from '@syncfusion/ej2-ng-inputs';
import { EmitType, createElement } from '@syncfusion/ej2-base';

@Component({
  selector: 'ej2-component',
  template: ` <ejs-uploader #defaultupload id='fileupload'  [asyncSettings]='path' allowedExtensions={{ej2upload}}>
  </ejs-uploader>`
})
export class Ej2DependentComponent {
  @ViewChild('defaultupload')
  public uploadObj: UploaderComponent;
  public path: Object = {
      saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
      removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
  };
  ej2upload: any;
  constructor(private pvtService: DependService) {}
  ngOnInit() {
    this.ej2upload = this.pvtService.getName();
  }
  ngAfterViewInit() {
  }
}
