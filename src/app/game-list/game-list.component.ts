import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

interface Result {
  feed: object;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  freeGames: any;
  paidGames: any;

  checked: boolean = true;

  constructor(
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.http
      .get<Result>(`https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-free/games/25/explicit.json`)
      .subscribe((appdata:Result) => {
        this.freeGames = appdata.feed;
        //console.log(this.freeGames);
    });
    this.http
      .get<Result>(`https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-paid/games/25/explicit.json`)
      .subscribe((appdata:Result) => {
        this.paidGames = appdata.feed;
        //console.log(this.paidGames);
    });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/