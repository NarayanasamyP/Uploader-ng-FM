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
var ej2_ng_popups_1 = require("@syncfusion/ej2-ng-popups");
var ej2_base_1 = require("@syncfusion/ej2-base");
var User = (function () {
    function User(
        // public time: Date,
        fileName) {
        this.fileName = fileName;
    }
    return User;
}());
var TemplateDrivenComponent = (function () {
    function TemplateDrivenComponent() {
        this.content = 'Form submitted successfully';
        this.buttons = [{ 'click': this.onClick.bind(this), buttonModel: { content: 'OK', cssClass: 'e-flat', isPrimary: true } }];
        this.visiblity = false;
        this.showCloseIcon = true;
    }
    TemplateDrivenComponent.prototype.ngOnInit = function () {
        this.user = new User(null);
    };
    TemplateDrivenComponent.prototype.onClick = function () {
        this.dialogObj.hide();
    };
    TemplateDrivenComponent.prototype.onSubmit = function () {
        if (!ej2_base_1.isNullOrUndefined(this.user.fileName)) {
            this.dialogObj.show();
            var formObject = new ej2_ng_inputs_1.FormValidator("form");
            formObject.element.reset();
            this.uploadObj.clearAll();
        }
        else {
            return false;
        }
    };
    TemplateDrivenComponent.prototype.onFileSelect = function (args) {
        this.user.fileName = args.filesData[0].name;
    };
    return TemplateDrivenComponent;
}());
__decorate([
    core_1.ViewChild('formUpload'),
    __metadata("design:type", ej2_ng_inputs_1.UploaderComponent)
], TemplateDrivenComponent.prototype, "uploadObj", void 0);
__decorate([
    core_1.ViewChild('confirmDialog'),
    __metadata("design:type", ej2_ng_popups_1.DialogComponent)
], TemplateDrivenComponent.prototype, "dialogObj", void 0);
TemplateDrivenComponent = __decorate([
    core_1.Component({
        selector: 'sample',
        styleUrls: ['./template-driven.component.css'],
        templateUrl: './template-driven.component.html'
    })
], TemplateDrivenComponent);
exports.TemplateDrivenComponent = TemplateDrivenComponent;
//# sourceMappingURL=template-driven.component.js.map