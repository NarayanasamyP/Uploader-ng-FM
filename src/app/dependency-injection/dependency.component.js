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
var dependent_service_1 = require("./dependent.service");
var ej2_ng_inputs_1 = require("@syncfusion/ej2-ng-inputs");
var Ej2DependentComponent = (function () {
    function Ej2DependentComponent(pvtService) {
        this.pvtService = pvtService;
        this.path = {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        };
    }
    Ej2DependentComponent.prototype.ngOnInit = function () {
        this.ej2upload = this.pvtService.getName();
    };
    Ej2DependentComponent.prototype.ngAfterViewInit = function () {
    };
    return Ej2DependentComponent;
}());
__decorate([
    core_1.ViewChild('defaultupload'),
    __metadata("design:type", ej2_ng_inputs_1.UploaderComponent)
], Ej2DependentComponent.prototype, "uploadObj", void 0);
Ej2DependentComponent = __decorate([
    core_1.Component({
        selector: 'ej2-component',
        template: " <ejs-uploader #defaultupload id='fileupload'  [asyncSettings]='path' allowedExtensions={{ej2upload}}>\n  </ejs-uploader>"
    }),
    __metadata("design:paramtypes", [dependent_service_1.DependService])
], Ej2DependentComponent);
exports.Ej2DependentComponent = Ej2DependentComponent;
//# sourceMappingURL=dependency.component.js.map