import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { UploaderComponent, RemovingEventArgs } from '@syncfusion/ej2-ng-inputs';
import { EmitType, createElement, detach } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-container',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateComponent {
  @ViewChild('defaultupload')
  public uploadObj: UploaderComponent;
  public path: Object = {
      saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
      removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
  };
  public allowExtensions: string = '.pdf, .png, .txt';
  public uploadTemplate: string = '<span class="wrapper">' + '<span class="icon template-icons sf-icon-${type}"></span>' +
           '<span class="name file-name">${name} ( ${size} bytes)</span>' +
           '<span class="upload-status">${status}</span>' + '</span>' +  '<span class="e-icons e-file-remove-btn" title="Remove"></span>';
  ngOnInit() {
    this.uploadObj.dropArea = document.getElementById('dropTarget');
    }
    ngAfterViewInit() {
        document.getElementById('dropArea').onclick = (e: any) => {
            let target: HTMLElement = <HTMLElement>e.target;
            if (target.classList.contains('e-file-delete-btn')) {
                for (let i: number = 0; i < this.uploadObj.getFilesData().length; i++) {
                    if (target.parentElement.getAttribute('data-file-name') === this.uploadObj.getFilesData()[i].name) {
                        this.uploadObj.remove(this.uploadObj.getFilesData()[i]);
                    }
                }
            }
            else if (target.classList.contains('e-file-remove-btn')) {
                detach(target.parentElement);
            }
        }
    }
  browseClick() {
      document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click(); return false;
  }


  public onUploadSuccess:  EmitType<Object> = (args: any) => {

      let li: Element = this.getLiElement(args);
      li.querySelector('.upload-status').innerHTML = args.file.status;
      li.querySelector('.upload-status').classList.add('upload-success');
  }

  public onUploadFailed:  EmitType<Object> = (args: any) => {
      let li: Element = this.getLiElement(args);
      li.querySelector('.upload-status').innerHTML = args.file.status;
      li.querySelector('.upload-status').classList.add('upload-failed');
  }
  public onUploadInProgress:  EmitType<Object> = (args: any) => {
      let progressValue : string = Math.round((args.e.loaded / args.e.total) * 100) + '%';
      let li: Element = this.getLiElement(args);
      li.querySelector('.upload-status').innerHTML = args.file.status + '(' + progressValue + ' )';
  }
  public getLiElement(args: any) {
      let liElements : NodeListOf<Element> = document.getElementsByClassName('e-upload')[0].querySelectorAll('.e-upload-files > li');
      let li : Element;
      for (let i: number = 0; i < liElements.length; i++) {
          if ( liElements[i].getAttribute('data-file-name') === args.file.name ) {
            li = liElements[i];
          }
      }
      return li;
  }
  public onSelect:  EmitType<Object> = (args: any) => {
    let allowedTypes: string[] = ['pdf', 'png', 'txt'];
    let modifiedFiles: any = [];
    for (let file of args.filesData) {
        if (allowedTypes.indexOf(file.type.toLowerCase()) > -1) {
            modifiedFiles.push(file);
        }
    }
    if (modifiedFiles.length > 0) {
        args.isModified = true;
        args.modifiedFilesData = modifiedFiles;
    } else { args.cancel = true; }
}
public onFileRemove(args: RemovingEventArgs): void {
    args.postRawFile = false;
}
}
