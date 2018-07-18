import { Component, ViewEncapsulation, ViewChild, Compiler, ViewContainerRef, ComponentFactoryResolver, NgModule, VERSION, asNativeElements} from '@angular/core';
import { Uploader } from '@syncfusion/ej2-ng-inputs';
import { Newcomponent } from './childComponent';

@Component({
  selector: 'app-container',
  styleUrls: ['./dynamicInj.component.css'],
  styles: ['.e-upload { width: 400px;margin-left: 350px;} #dynamicBtn {margin: 20px 0px 20px 20px }'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div id="container" class="temp">
      <h4>{{name}}</h4>
      <button id="dynamicBtn" (click)="openUploader()">Open Uploader</button>
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
