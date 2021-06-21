import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.page.html',
  styleUrls: ['./localidad.page.scss'],
})
export class LocalidadPage implements OnInit {
  locationId: string;
  localidad;
  characters = [];

  constructor(
    private activateR: ActivatedRoute,
    private http: HttpClient,
    private htmlChraracter: HttpClient
  ) {}

  ngOnInit() {
    this.locationId = this.activateR.snapshot.paramMap.get('id');
    this.http
      .get('https://rickandmortyapi.com/api/location/' + this.locationId)
      .subscribe((res) => (this.localidad = res));
    this.htmlChraracter
      .get<any>('https://rickandmortyapi.com/api/character')
      .subscribe((res1) => {
        console.log(res1);
        this.characters = res1.results;
      });
  }
}
