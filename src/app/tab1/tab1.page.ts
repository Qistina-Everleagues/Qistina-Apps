import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http: HttpClient) {}

  friends: any = [];

  runHttp() {
    this.http.get('https://demo7523367.mockable.io/')
      .subscribe(data => {
        console.log(data);
        this.friends = data;
      });
  }

}
