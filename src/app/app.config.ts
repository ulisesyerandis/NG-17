import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule, MatTable} from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule}  from '@angular/material/input'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import FormComponent from './dashboard/pages/form/form.component';
import StudentListComponent from './dashboard/pages/student-list/student-list.component';
import ControlFlowComponent from './dashboard/pages/main-view/main-view.component';
import { FormStudentComponent } from './dashboard/pages/form-student/form-student.component';
import { ToastComponent } from '@shared/toast/toast/toast.component';
 
export const appConfig: ApplicationConfig = 
{
  providers: 
  [
    provideRouter(routes),
    //    importProvidersFrom -> can't be standalone 
    importProvidersFrom(HttpClientModule, FormsModule, NgModule, 
      BrowserModule, ReactiveFormsModule, 
      MatCardModule, MatTableModule, MatTable,
      MatPaginatorModule, MatFormFieldModule, MatInputModule,
      NoopAnimationsModule, MatPaginator, 
      ),
      FormComponent, StudentListComponent, ControlFlowComponent,
      FormStudentComponent,ToastComponent
  ],

}
