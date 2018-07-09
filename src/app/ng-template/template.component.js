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
var TemplateComponent = (function () {
    function TemplateComponent() {
        var _this = this;
        this.path = {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        };
        this.uploadTemplate = '<span class="wrapper">' + '<span class="icon template-icons sf-icon-${type}"></span>' +
            '<span class="name file-name">${name} ( ${size} bytes)</span>' +
            '<span class="upload-status">${status}</span>' + '</span>' + '<span class="e-icons e-file-remove-btn" title="Remove"></span>';
        this.onUploadSuccess = function (args) {
            var li = _this.getLiElement(args);
            li.querySelector('.upload-status').innerHTML = args.file.status;
            li.querySelector('.upload-status').classList.add('upload-success');
        };
        this.onUploadFailed = function (args) {
            var li = _this.getLiElement(args);
            li.querySelector('.upload-status').innerHTML = args.file.status;
            li.querySelector('.upload-status').classList.add('upload-failed');
        };
        this.onUploadInProgress = function (args) {
            var progressValue = Math.round((args.e.loaded / args.e.total) * 100) + '%';
            var li = _this.getLiElement(args);
            li.querySelector('.upload-status').innerHTML = args.file.status + '(' + progressValue + ' )';
        };
    }
    TemplateComponent.prototype.ngOnInit = function () {
        this.uploadObj.dropArea = document.getElementById('dropTarget');
        // this.uploadObj.template = '<span class="wrapper">' + '<span class="icon template-icons sf-icon-${type}"></span>' +
        //         '<span class="name file-name">${name} ( ${size} bytes)</span>' +
        //         '<span class="upload-status">${status}</span>' + '</span>' +  '<span class="e-icons e-file-remove-btn" title="Remove"></span>';
    };
    TemplateComponent.prototype.browseClick = function () {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
        return false;
    };
    TemplateComponent.prototype.getLiElement = function (args) {
        var liElements = document.getElementsByClassName('e-upload')[0].querySelectorAll('.e-upload-files > li');
        var li;
        for (var i = 0; i < liElements.length; i++) {
            if (liElements[i].getAttribute('data-file-name') === args.file.name) {
                li = liElements[i];
            }
        }
        return li;
    };
    return TemplateComponent;
}());
__decorate([
    core_1.ViewChild('defaultupload'),
    __metadata("design:type", ej2_ng_inputs_1.UploaderComponent)
], TemplateComponent.prototype, "uploadObj", void 0);
TemplateComponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        templateUrl: './template.component.html',
        styleUrls: ['./template.component.css'],
        encapsulation: core_1.ViewEncapsulation.None
    })
], TemplateComponent);
exports.TemplateComponent = TemplateComponent;
//# sourceMappingURL=template.component.js.map