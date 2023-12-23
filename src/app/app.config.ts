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
 
export const appConfig: ApplicationConfig = 
{
  providers: 
  [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule, FormsModule, NgModule, 
      BrowserModule, ReactiveFormsModule, 
      MatCardModule, MatTableModule, MatTable),
  ]
};
