import { Component, OnInit } from '@angular/core';

import { NasaApiService } from './services/nasa-api.service';

import { Nasa } from './models/nasa';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-jwt-api';

  formGroup: FormGroup;

  nasaAPOD: Nasa[];

  constructor(
    private nasaApiService: NasaApiService,
    private authService: AuthServiceService) { }

  ngOnInit() {
    this.initForm();
    this.nasaApiService.getNasaApi().subscribe(
      data => {
        console.log(data);
        this.nasaAPOD = data;
      }
    );

  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })

  }

  loginProcess() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(result => {
        if (result.success) {
          console.log(result);
          alert(result.message);
        } else {
          alert(result.message);
        }
      })
    }
  }

}
