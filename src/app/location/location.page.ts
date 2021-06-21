import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  locations = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>('https://rickandmortyapi.com/api/location')
      .subscribe((res) => {
        console.log(res);
        this.locations = res.results;
      });
  }
}
