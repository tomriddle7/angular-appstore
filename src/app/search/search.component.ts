import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import{ HttpClient } from '@angular/common/http';

interface Result {
  results: object;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class searchComponent {
  searchResult: any;
  checkoutForm;

  
  constructor(
    private formBuilder: FormBuilder,
    public http: HttpClient,
  ) {
    this.checkoutForm = this.formBuilder.group({
      property: ''
    });
  }

  onSubmit(customerData) {
    // 주문 로직은 여기에 구현합니다.
    this.checkoutForm.reset();
    this.http
      .get<Result>(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${customerData.property}&country=kr&entity=software`)
      .subscribe((appdata:Result) => {
        /*let searchRS = appdata.results.map(
          function(app) {
            return {
              id: app.trackId,
              name: app.trackName,
              artworkUrl100: app.artworkUrl100,
              //genres[0].name: app.primaryGenreName,
              url: app.trackViewUrl
            }
          });
        this.searchResult = {title: "검색결과", results: searchRS};
        console.log(searchRS);*/

        this.searchResult = appdata.results;
    });
  }

  iTune(url) {
    window.open(url, '_blank');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/