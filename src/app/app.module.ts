import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// By default, the app generated by ng init will include the FormsModule, here we’re requiring the ReactiveFormsModule as well
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { AppComponent } from './app.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
// import { ReactiveFormValidationComponent } from './reactive-form/reactive.form.validation';
import { AppChildComponent } from './app-child/app.child.component';
import { AppParentComponent } from './app-parent/app.parent.component';
//import { ChildComponent } from './child-parent-validation/child.component';

@NgModule({
  declarations: [
    AppComponent, AppContentComponent, AppHeaderComponent, AppHomeComponent,  AppFooterComponent, AppChildComponent, AppParentComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule,AngularMultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
