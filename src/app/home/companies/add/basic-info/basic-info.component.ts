import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IMAGE_PATHS } from 'src/app/image-paths';
import { email } from 'src/app/validators/email.validator';
import { image } from 'src/app/validators/image.validator';
import { phone } from 'src/app/validators/phone.validator';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  images = IMAGE_PATHS;
  isSubmitted: boolean = false;

  reactiveForm = new FormGroup({
    companyName: new FormControl('', [Validators.required]),
    industry: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, phone]),
    email: new FormControl('', [Validators.required, email]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {

  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.reactiveForm.status === 'VALID') {
      console.log(this.reactiveForm);
    }
  }
}
