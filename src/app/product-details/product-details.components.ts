import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ HttpClient } from '@angular/common/http';

interface Config {
    resultCount: number;
    results: Array<object>;
}

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.components.html',
    styleUrls: ['./product-details.components.css']
})

export class ProductDetailsComponent implements OnInit {
    product: object;
  
    constructor(
        private route: ActivatedRoute,
        public http: HttpClient,
    ) { }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
          this.http
          .get<Config>(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${+params.get('productId')}&country=KR`)
          .subscribe((appdata:Config) => {
            this.product = appdata.results[0];
            console.log(this.product);
          });
        });
      }
  }