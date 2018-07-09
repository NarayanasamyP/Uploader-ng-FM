import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { UploaderComponent } from '@syncfusion/ej2-ng-inputs';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { AppComponent }  from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './ng-template/template.component';
import { SimpleComponent } from './simple-rendering/simple-rendering.component';
import { DependService } from './dependency-injection/dependent.service';
import { TemplateDrivenComponent } from './template-driven-form/template-driven.component';
import { ReactiveComponent } from './reactive-form/reactive.component';
import { Newcomponent } from './dynamic-injection/childComponent';
import { DependencyComponent } from './dependency-injection/app.component';
import { Ej2DependentComponent } from './dependency-injection/dependency.component';
import { DynamicInjComponent } from './dynamic-injection/dynamicInj.component'; //
import { ModelComponent } from './ng-model/ng-model.component';
import { DirectiveComponent } from './directive/directive.component';
import { MyNgIfDirective } from './directive/strutural.directive';

// const appRoutes: Routes = [
//   { path: 'ng-content', component: NgContentComponent }
// ];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(rootRouterConfig, { useHash: true }), 
    FormsModule,
    ReactiveFormsModule,],
    declarations: [ AppComponent,
       DependencyComponent,
       Ej2DependentComponent,
       SimpleComponent,
       DynamicInjComponent,
       DialogComponent,
       UploaderComponent,
       Newcomponent,
       TemplateComponent,
       ReactiveComponent,
       TemplateDrivenComponent,
       ModelComponent,
       DirectiveComponent,
       MyNgIfDirective],
    bootstrap:    [ AppComponent ],
    providers: [DependService]
})
export class AppModule { }
