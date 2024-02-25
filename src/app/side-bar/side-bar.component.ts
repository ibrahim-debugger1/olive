import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  constructor(private router: Router, private sharedData: SharedDataService) {}

  ngOnInit() {
    this.sharedData.SelectedClass$.subscribe(() => {
      this.selectLink('');
    });
  }

  side_links = {
    Dashboard: { path: 'home/dashboard', selected: false },
    Companies: { path: 'home/companies', selected: false },
    Services: { path: 'home/services', selected: false },
    License: { path: 'home/license', selected: false },
    Billing: { path: 'home/billing', selected: false },
    Reports: { path: 'home/reports', selected: false },
    'Project Management': { path: 'home/project/management', selected: false },
  };
  sideLinksArray = Object.entries(this.side_links);

  selectLink(key: string) {
    this.sideLinksArray.forEach((element) => {
      element[1]['selected'] = false;
      if (element[0] == key) {
        element[1]['selected'] = true;
      }
    });
  }
}
