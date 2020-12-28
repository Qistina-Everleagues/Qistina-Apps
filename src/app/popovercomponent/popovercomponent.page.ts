import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {

  friends: any = [];

  constructor(private popover:PopoverController, private http: HttpClient) { }

  ngOnInit() {
  }

  ClosePopover()
   {
     this.popover.dismiss();
   }

   runHttp() {
    this.http.get('https://demo7523367.mockable.io/')
      .subscribe(data => {
        console.log(data);
        this.friends = data;
      });
  }

}
