import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

 buttons=[{id:1 ,label:'First'},{id:2,label:"Second"},{id:3,label:"Third"},{id:4,label:"Fourth"}];
  constructor() { }

  ngOnInit() {
  }

}
