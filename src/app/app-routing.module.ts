import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesListComponent } from './home/companies/companies-list/companies-list.component';
import { LoginComponent } from './login/login.component';
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
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'companies',
        component: CompaniesComponent,
        children: [
          { path: '', component: CompaniesListComponent },
          {
            path: 'add',
            component: AddComponent,
            children: [
              { path: '', component: BasicInfoComponent },
              { path: 'configurations', component: ConfigurationsComponent },
              { path: 'billing', component: BillingComponent },
              { path: 'license', component: LicenseComponent },
            ],
          },
        ],
      },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'license', component: LicenseComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'project/management', component: ProjectManagementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
