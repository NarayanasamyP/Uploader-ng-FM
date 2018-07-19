import { Routes } from '@angular/router';

import { SimpleComponent } from './simple-rendering/simple-rendering.component';
import { DependencyComponent } from './dependency-injection/app.component';
import { TemplateComponent } from './ng-template/template.component';
import { TemplateDrivenComponent } from './template-driven-form/template-driven.component';
import { ReactiveComponent } from './reactive-form/reactive.component';
import { DynamicInjComponent } from './dynamic-injection/dynamicInj.component'
import { ModelComponent } from './ng-model/ng-model.component';
import { DirectiveComponent } from './directive/directive.component';
// import {TagDirectivesComponent} from './tag-directives/tagdirectives.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'simple-rendering', component: SimpleComponent },
  { path: 'ng-model', component: ModelComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'dependency-injection', component: DependencyComponent },
  { path: 'ng-template', component: TemplateComponent },
  { path: 'template-driven-form', component: TemplateDrivenComponent },
  { path: 'reactive-form', component: ReactiveComponent },
  { path: 'dynamic-injection', component: DynamicInjComponent },
  // { path: 'tag-directives', component: TagDirectivesComponent }
];
