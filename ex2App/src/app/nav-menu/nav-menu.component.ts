import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

myList = [
    {
      txt: 'Home',
      link: '#Home'
    },
    {
      txt: 'Store',
      link: '#Store'
    },
    {
      txt: 'About Us',
      link: '#AboutUs'
    },
    {
      txt: 'Contact Us',
      link: '#ContactUs'
    }
  ];

  constructor() { }
  ngOnInit() {}

}
