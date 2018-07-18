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
var ej2_ng_inputs_1 = require("@syncfusion/ej2-ng-inputs");
var ModelComponent = (function () {
    function ModelComponent() {
        this.path = {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        };
    }
    return ModelComponent;
}());
__decorate([
    core_1.ViewChild('defaultupload'),
    __metadata("design:type", ej2_ng_inputs_1.UploaderComponent)
], ModelComponent.prototype, "uploadObj", void 0);
ModelComponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        templateUrl: './ng-model.component.html',
        styleUrls: ['./ng-model.component.css'],
        styles: ['.e-upload { width: 400px;}'],
        encapsulation: core_1.ViewEncapsulation.None
    })
], ModelComponent);
exports.ModelComponent = ModelComponent;
//# sourceMappingURL=ng-model.component.js.map