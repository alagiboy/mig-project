import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {CompaniesComponent} from './components/companies/companies.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [AppComponent, CompaniesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }