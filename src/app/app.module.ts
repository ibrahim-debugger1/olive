import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CompaniesListComponent } from './home/companies/companies-list/companies-list.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ServicesComponent } from './home/services/services.component';
import { LicenseComponent } from './home/license/license.component';
import { BillingComponent } from './home/billing/billing.component';
import { ReportsComponent } from './home/reports/reports.component';
import { ProjectManagementComponent } from './home/project-management/project-management.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './home/companies/add/add.component';
import { CompaniesComponent } from './home/companies/companies.component';
import { BasicInfoComponent } from './home/companies/add/basic-info/basic-info.component';
import { ConfigurationsComponent } from './home/companies/add/configurations/configurations.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    CompaniesListComponent,
    HeaderComponent,
    DashboardComponent,
    ServicesComponent,
    LicenseComponent,
    BillingComponent,
    ReportsComponent,
    ProjectManagementComponent,
    HomeComponent,
    AddComponent,
    CompaniesComponent,
    BasicInfoComponent,
    ConfigurationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
