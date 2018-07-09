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
var forms_1 = require("@angular/forms");
var ej2_ng_inputs_1 = require("@syncfusion/ej2-ng-inputs");
var ej2_ng_popups_1 = require("@syncfusion/ej2-ng-popups");
var ReactiveComponent = (function () {
    function ReactiveComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.content = 'Form submitted successfully';
        this.buttons = [{ 'click': this.onClick.bind(this), buttonModel: { content: 'OK', cssClass: 'e-flat', isPrimary: true } }];
        this.visiblity = false;
        this.showCloseIcon = true;
    }
    ReactiveComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.dialogObj.show();
            var formObject = new ej2_ng_inputs_1.FormValidator("form");
            formObject.element.reset();
            this.uploadObj.clearAll();
        }
    };
    ReactiveComponent.prototype.onFileSelect = function (args) {
        this.form.patchValue({
            upload: args.filesData[0].name
        });
    };
    ReactiveComponent.prototype.onClick = function () {
        this.dialogObj.hide();
    };
    ReactiveComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            upload: [null, [forms_1.Validators.required]],
        });
    };
    return ReactiveComponent;
}());
__decorate([
    core_1.ViewChild('formUpload'),
    __metadata("design:type", ej2_ng_inputs_1.UploaderComponent)
], ReactiveComponent.prototype, "uploadObj", void 0);
__decorate([
    core_1.ViewChild('confirmDialog'),
    __metadata("design:type", ej2_ng_popups_1.DialogComponent)
], ReactiveComponent.prototype, "dialogObj", void 0);
ReactiveComponent = __decorate([
    core_1.Component({
        selector: 'about',
        styleUrls: ['./reactive.component.css'],
        templateUrl: './reactive.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ReactiveComponent);
exports.ReactiveComponent = ReactiveComponent;
//# sourceMappingURL=reactive.component.js.map