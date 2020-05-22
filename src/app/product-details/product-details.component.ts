import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import{ HttpClient } from '@angular/common/http';

interface Config {
    resultCount: number;
    results: Array<object>;
}

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
    productDetail: any;
    //productDetail = detail;
    constructor(
        private route: ActivatedRoute,
        private _location: Location,
        public http: HttpClient,
    ) { }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
          this.http
          .get<Config>(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${+params.get('productId')}&country=KR`)
          .subscribe((appdata:Config) => {
            this.productDetail = appdata.results[0];
            console.log(this.productDetail);
          });
        });
      }
    
    iTune(url) {
      window.open(url, '_blank');
    }

    goBack() {
      this._location.back();
    }
  }