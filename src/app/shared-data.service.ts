import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { company } from './types/company';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor() {}
  SelectedClass = new Subject<{}>();
  SelectedClass$ = this.SelectedClass.asObservable();

  companies_list: company[] = [
    {
      id: 1,
      name: 'Med Net',
      type: 'Insurance Company',
      country: 'Jordan',
      status: 'Active',
      Date: 'Jan, 2024',
    },
    {
      id: 2,
      name: 'Kings Academy',
      type: 'School',
      country: 'USA',
      status: 'Active',
      Date: 'Jan, 2024',
    },
    {
      id: 3,
      name: 'Abdali',
      type: 'Hospital',
      country: 'Jordan',
      status: 'Active',
      Date: 'Jan, 2024',
    },
    {
      id: 4,
      name: 'Riyadh Bank',
      type: 'Bank',
      country: 'Saudi Arabia',
      status: 'Active',
      Date: 'Jan, 2024',
    },
    {
      id: 5,
      name: 'Al Istishari ',
      type: 'Hospital',
      country: 'UAE',
      status: 'Active',
      Date: 'Jan, 2024',
    },
    {
      id: 6,
      name: 'FoodRockers',
      type: 'Restaurant',
      country: 'UAE',
      status: 'Active',
      Date: 'NOV, 2023',
    },
    {
      id: 7,
      name: 'Liwa',
      type: 'School',
      country: 'Jordan',
      status: 'Active',
      Date: 'NOV, 2023',
    },
    {
      id: 8,
      name: 'FoodRockers',
      type: 'Restaurant',
      country: 'Saudi Arabia',
      status: 'Active',
      Date: 'NOV, 2023',
    },
    {
      id: 9,
      name: 'Riyadh Bank',
      type: 'Bank',
      country: 'Saudi Arabia',
      status: 'Active',
      Date: 'NOV, 2023',
    },
    {
      id: 10,
      name: 'Al Istishari ',
      type: 'Hospital',
      country: 'USA',
      status: 'Inactive',
      Date: 'NOV, 2023',
    },
  ];

  removeSelectedClass() {
    this.SelectedClass.next({});
  }

  getCompanies() {
    return this.companies_list;
  }
}
