import { Component, ViewEncapsulation, ViewChild, ViewContainerRef, ComponentFactoryResolver, NgModule, VERSION, asNativeElements} from '@angular/core';
import { Uploader } from '@syncfusion/ej2-ng-inputs';
import { Newcomponent } from './childComponent';

@Component({
  selector: 'app-container',
  styleUrls: ['./dynamicInj.component.css'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div id="dynamic_container" class="temp">
      <h3 id="header">{{name}}</h3>
      <button id="dynamicBtn" class="btn btn-primary" (click)="openUploader()">Open Uploader</button>
      <br/>
      <div id="dynamicUpload"></div>
    </div>
  `,
  entryComponents: [Newcomponent]
})
export class DynamicInjComponent {
    constructor(
      private componentResolver: ComponentFactoryResolver,
      protected viewContainerRef: ViewContainerRef ) {
    }
    @ViewChild('newContent') newContent: Newcomponent;
  public name: string = `Rendering uploader as dynamic`;
  public isChildModal: boolean = false;
  public uploadObj: Uploader;

  openUploader() {
    let componentFactory = this.componentResolver.resolveComponentFactory(Newcomponent);
    const ref = this.viewContainerRef.createComponent(componentFactory);
    let newCompEle = ref.instance.itemTemplate as (any);
    document.getElementById('dynamicUpload').innerHTML = newCompEle.element.outerHTML
 }
}
