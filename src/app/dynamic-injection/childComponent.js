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
var Newcomponent = (function () {
    function Newcomponent() {
    }
    return Newcomponent;
}());
__decorate([
    core_1.ViewChild('fileUpload'),
    __metadata("design:type", ej2_ng_inputs_1.UploaderComponent)
], Newcomponent.prototype, "itemTemplate", void 0);
Newcomponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        template: "\n      <ejs-uploader #fileUpload id=\"Uploader\" autoUpload='false'></ejs-uploader>\n  ",
    }),
    __metadata("design:paramtypes", [])
], Newcomponent);
exports.Newcomponent = Newcomponent;
//# sourceMappingURL=childComponent.js.map