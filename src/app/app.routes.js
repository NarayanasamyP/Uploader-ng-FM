"use strict";
var simple_rendering_component_1 = require("./simple-rendering/simple-rendering.component");
var app_component_1 = require("./dependency-injection/app.component");
var template_component_1 = require("./ng-template/template.component");
var template_driven_component_1 = require("./template-driven-form/template-driven.component");
var reactive_component_1 = require("./reactive-form/reactive.component");
var dynamicInj_component_1 = require("./dynamic-injection/dynamicInj.component");
var ng_model_component_1 = require("./ng-model/ng-model.component");
var directive_component_1 = require("./directive/directive.component");
exports.rootRouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'simple-rendering', component: simple_rendering_component_1.SimpleComponent },
    { path: 'ng-model', component: ng_model_component_1.ModelComponent },
    { path: 'directive', component: directive_component_1.DirectiveComponent },
    { path: 'dependency-injection', component: app_component_1.DependencyComponent },
    { path: 'ng-template', component: template_component_1.TemplateComponent },
    { path: 'template-driven-form', component: template_driven_component_1.TemplateDrivenComponent },
    { path: 'reactive-form', component: reactive_component_1.ReactiveComponent },
    { path: 'dynamic-injection', component: dynamicInj_component_1.DynamicInjComponent }
];
//# sourceMappingURL=app.routes.js.map