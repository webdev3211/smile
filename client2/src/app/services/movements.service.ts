import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class MovementsService {


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



  showMovements() {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'movement/', this.options).map(res => res.json());
  }


}
