import { Component } from '@angular/core';
import { IMAGE_PATHS } from '../image-paths';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  images = IMAGE_PATHS;
}
