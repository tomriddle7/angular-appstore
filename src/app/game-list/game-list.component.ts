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
  upcomingApps: any;
  upcomingGames: any;

  checked: boolean = true;

  constructor(
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.http
      .get<Result>(`https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-free/games/25/explicit.json`)
      .subscribe((appdata:Result) => {
        this.upcomingApps = appdata.feed;
        //console.log(this.upcomingApps);
    });
    this.http
      .get<Result>(`https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-paid/games/25/explicit.json`)
      .subscribe((appdata:Result) => {
        this.upcomingGames = appdata.feed;
        //console.log(this.upcomingGames);
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