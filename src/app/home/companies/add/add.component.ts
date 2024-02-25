import { Component } from '@angular/core';
import { IMAGE_PATHS } from 'src/app/image-paths';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  images = IMAGE_PATHS;
  baseUrl = 'home/companies/add/';
  nav_links = {
    basicInfo: {
      name: 'BASIC INFO',
      path: `${this.baseUrl}`,
      selected: true,
    },
    config: {
      name: 'CONFIGURATIONS',
      path: `${this.baseUrl}configurations`,
      selected: false,
    },
    billing: {
      name: 'BILLING',
      path: `${this.baseUrl}billing`,
      selected: false,
    },
    license: {
      name: 'License',
      path: `${this.baseUrl}license`,
      selected: false,
    },
  };
  navLinksArray = Object.entries(this.nav_links);

  selectLink(key: string) {
    this.navLinksArray.forEach((element) => {
      element[1]['selected'] = false;
      if (element[0] == key) {
        element[1]['selected'] = true;
      }
    });
  }
}
