import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { UploaderComponent, RemovingEventArgs } from '@syncfusion/ej2-ng-inputs';
import { EmitType, detach } from '@syncfusion/ej2-base';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';

@Component({
  selector: 'app-container',
  templateUrl: './tagdirectives.component.html',
  styleUrls: ['./tagdirectives.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TagDirectivesComponent {
  @ViewChild('preloadupload')
    public uploadObj: UploaderComponent;

    public path: Object = {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
    };

    ngAfterViewInit(): void {
        document.getElementById('clearbtn').onclick = () => {
            this.uploadObj.clearAll();
        };
    }

    public onFileRemove(args: RemovingEventArgs): void {
        args.postRawFile = false;
    }

    public dropElement: HTMLElement = document.getElementsByClassName('container')[0] as HTMLElement;
}
