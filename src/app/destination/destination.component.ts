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
  arrays;
  destinations;
  destination;

  constructor(
    public authTokenService:Angular2TokenService,
    // public authService:AuthService,
    public router:Router,
    private http: Http
  ) {






  // logOut() {
  //   this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  // }


  http.get('http://localhost:3000/destinations.json')
  .subscribe(
    data => {
      this.arrays = data.json();
      this.destinations = Array.of(this.arrays);
      this.destination = (this.destinations[0]);
    },
    err => console.error(err),
    () => console.log(Array.of(this.destination))
  );
}



ngOnInit() {}

}
