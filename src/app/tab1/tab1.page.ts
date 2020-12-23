import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http: HttpClient, private navCtrl: NavController, private authService: AuthenticationService) {}

  friends: any = [];

  runHttp() {
    this.http.get('https://demo7523367.mockable.io/')
      .subscribe(data => {
        console.log(data);
        this.friends = data;
      });
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }
}
