import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';

import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class VolunteerService {


  options;
  domain = this.authService.domain;


  constructor(
    private authService: AuthService,
    private http: Http

  ) {



  }


  createAuthenticationHeaders() {
    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authService.authToken
      })

    });
  }


  newVolunteer(volunteerdetails) {
    this.createAuthenticationHeaders();
    return this.http.post(this.domain + 'volunteer/', volunteerdetails, this.options).map(res => res.json())
  }


}
