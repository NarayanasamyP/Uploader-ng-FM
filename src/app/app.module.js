"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var platform_browser_1 = require("@angular/platform-browser");
var ej2_ng_inputs_1 = require("@syncfusion/ej2-ng-inputs");
var ej2_ng_popups_1 = require("@syncfusion/ej2-ng-popups");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var template_component_1 = require("./ng-template/template.component");
var simple_rendering_component_1 = require("./simple-rendering/simple-rendering.component");
var dependent_service_1 = require("./dependency-injection/dependent.service");
var template_driven_component_1 = require("./template-driven-form/template-driven.component");
var reactive_component_1 = require("./reactive-form/reactive.component");
var childComponent_1 = require("./dynamic-injection/childComponent");
var app_component_2 = require("./dependency-injection/app.component");
var dependency_component_1 = require("./dependency-injection/dependency.component");
var dynamicInj_component_1 = require("./dynamic-injection/dynamicInj.component"); //
var ng_model_component_1 = require("./ng-model/ng-model.component");
var directive_component_1 = require("./directive/directive.component");
var strutural_directive_1 = require("./directive/strutural.directive");
var field_error_display_component_1 = require("./field-error-display/field-error-display.component");
// const appRoutes: Routes = [
//   { path: 'ng-content', component: NgContentComponent }
// ];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(app_routes_1.rootRouterConfig, { useHash: true }),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,],
        declarations: [app_component_1.AppComponent,
            app_component_2.DependencyComponent,
            dependency_component_1.Ej2DependentComponent,
            simple_rendering_component_1.SimpleComponent,
            dynamicInj_component_1.DynamicInjComponent,
            ej2_ng_popups_1.DialogComponent,
            ej2_ng_inputs_1.UploaderComponent,
            childComponent_1.Newcomponent,
            template_component_1.TemplateComponent,
            reactive_component_1.ReactiveComponent,
            template_driven_component_1.TemplateDrivenComponent,
            ng_model_component_1.ModelComponent,
            directive_component_1.DirectiveComponent,
            strutural_directive_1.MyNgIfDirective,
            field_error_display_component_1.FieldErrorDisplayComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [dependent_service_1.DependService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map