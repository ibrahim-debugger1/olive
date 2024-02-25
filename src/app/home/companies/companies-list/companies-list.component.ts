import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGE_PATHS } from 'src/app/image-paths';
import { SharedDataService } from 'src/app/shared-data.service';
import { company } from 'src/app/types/company';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss'],
})
export class CompaniesListComponent implements OnInit {
  images = IMAGE_PATHS;
  constructor(private sharedData: SharedDataService,private router:Router) {}
  countries_list: company[] = [];

  ngOnInit() {
    this.countries_list = this.sharedData.getCompanies();
  }

  add(){
    this.router.navigate(['/home/companies/add']);
  }

}
