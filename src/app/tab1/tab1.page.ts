import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { PopoverController } from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http: HttpClient, private navCtrl: NavController, private authService: AuthenticationService, private popover: PopoverController) {}

  friends: any = [];

  runHttp() {
    this.http.get('https://demo7523367.mockable.io/')
      .subscribe(data => {
        console.log(data);
        this.friends = data;
      });
  }

  CreatePopover()
   {
     this.popover.create({component:PopovercomponentPage,
     showBackdrop:false}).then((popoverElement)=>{
       popoverElement.present();
     })
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
