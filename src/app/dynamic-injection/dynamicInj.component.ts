import { Component, ElementRef, ViewChild, Compiler, ViewContainerRef, ComponentFactoryResolver, NgModule, VERSION, asNativeElements} from '@angular/core';
import { Uploader } from '@syncfusion/ej2-ng-inputs';
import { Newcomponent } from './childComponent';
import { append } from '@syncfusion/ej2-base';
// import {Newcomponent} from './childComponent.ts'; 

@Component({
  selector: 'my-app',
  styleUrls: ['./dynamicInj.component.css'],
  template: `
    <div id="container" class="temp">
      <h4>{{name}}</h4>
      <button (click)="openUploader()">Open Uploader</button>
      <div id="dynamicUpload"></div>
    </div>
  `,
  entryComponents: [Newcomponent]
})
export class DynamicInjComponent {

  //changes for new component
    constructor(
      private componentResolver: ComponentFactoryResolver,
      protected viewContainerRef: ViewContainerRef ) {
    }
    @ViewChild('newContent') newContent: Newcomponent;
  //end of changes 
  //childComponent : ChildComponent;
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
