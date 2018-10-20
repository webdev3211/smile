import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';



@Injectable()
export class DonationsService {

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


  newDonation(donation) {
    this.createAuthenticationHeaders();
    return this.http.post(this.domain + 'donates/createDonation', donation, this.options).map(res => res.json())
  }

  getAllFood() {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'donates/food', this.options).map(res => res.json())

  }

  getAllClothes() {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'donates/cloth', this.options).map(res => res.json())

  }



}
