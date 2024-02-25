import { Component } from '@angular/core';
import { IMAGE_PATHS } from '../image-paths';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logedIn: boolean = true;
  images = IMAGE_PATHS;
  username: string = 'Eyad Hammoudeh';

  constructor(private sharedData: SharedDataService){}

  goHome(){
    this.sharedData.removeSelectedClass();
  }
}
