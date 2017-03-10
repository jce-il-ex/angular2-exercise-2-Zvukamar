import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

myList = [
    {
      txt: 'Home'
    },
    {
      txt: 'Store'
    },
    {
      txt: 'About Us'
    },
    {
      txt: 'Contact Us'
    }
  ];

  constructor() { }
  ngOnInit() {}

}
