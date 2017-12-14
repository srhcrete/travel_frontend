import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
// import { AuthService } from "../services/auth.service";
import { Angular2TokenService } from "angular2-token";
import { Http } from "@angular/http";

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.sass']
})
export class DestinationComponent implements OnInit {
  destinations;

  constructor(
    public authTokenService:Angular2TokenService,
    // public authService:AuthService,
    public router:Router,
    private http: Http
  ) {

    http.get('http://localhost:3000/destinations.json')
      .subscribe(
        res => this.destinations = res.json()
      );

   }

  // logOut() {
  //   this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  // }

  ngOnInit() {
  }

}
