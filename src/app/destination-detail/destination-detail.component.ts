import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Angular2TokenService } from "angular2-token";
import { Http } from "@angular/http";

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.sass']
})
export class DestinationDetailComponent implements OnInit {
  arrays;
  details;
  detail;

  constructor(
    public authTokenService:Angular2TokenService,
    public router:Router,
    private http: Http
  ) {

  http.get('http://localhost:3000/destination.json')
  .subscribe(
    data => {
      this.details = data.json();
    },
    err => console.error(err),
    () => console.log(Array.of(this.details))
  );
}



ngOnInit() {}

}
