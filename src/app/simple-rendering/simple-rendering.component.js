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
var SimpleComponent = (function () {
    function SimpleComponent() {
        this.path = {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        };
    }
    return SimpleComponent;
}());
__decorate([
    core_1.ViewChild('defaultupload'),
    __metadata("design:type", ej2_ng_inputs_1.UploaderComponent)
], SimpleComponent.prototype, "uploadObj", void 0);
SimpleComponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        templateUrl: './simple-rendering.component.html',
        styleUrls: ['./simple-rendering.component.css'],
        encapsulation: core_1.ViewEncapsulation.None
    })
], SimpleComponent);
exports.SimpleComponent = SimpleComponent;
//# sourceMappingURL=simple-rendering.component.js.map