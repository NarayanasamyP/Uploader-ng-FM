"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var childComponent_1 = require("./childComponent");
var DynamicInjComponent = (function () {
    function DynamicInjComponent(componentResolver, viewContainerRef) {
        this.componentResolver = componentResolver;
        this.viewContainerRef = viewContainerRef;
        this.name = "Rendering uploader as dynamic";
        this.isChildModal = false;
    }
    DynamicInjComponent.prototype.openUploader = function () {
        var componentFactory = this.componentResolver.resolveComponentFactory(childComponent_1.Newcomponent);
        var ref = this.viewContainerRef.createComponent(componentFactory);
        var newCompEle = ref.instance.itemTemplate;
        document.getElementById('dynamicUpload').innerHTML = newCompEle.element.outerHTML;
    };
    return DynamicInjComponent;
}());
__decorate([
    core_1.ViewChild('newContent'),
    __metadata("design:type", childComponent_1.Newcomponent)
], DynamicInjComponent.prototype, "newContent", void 0);
DynamicInjComponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        styleUrls: ['./dynamicInj.component.css'],
        encapsulation: core_1.ViewEncapsulation.None,
        template: "\n    <div id=\"dynamic_container\" class=\"temp\">\n      <h3 id=\"header\">{{name}}</h3>\n      <button id=\"dynamicBtn\" class=\"btn btn-primary\" (click)=\"openUploader()\">Open Uploader</button>\n      <br/>\n      <div id=\"dynamicUpload\"></div>\n    </div>\n  ",
        entryComponents: [childComponent_1.Newcomponent]
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        core_1.ViewContainerRef])
], DynamicInjComponent);
exports.DynamicInjComponent = DynamicInjComponent;
//# sourceMappingURL=dynamicInj.component.js.map