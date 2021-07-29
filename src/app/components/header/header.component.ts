import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    window.addEventListener('click', e => {
      if (!document.getElementsByClassName('navbar-collapse')[0].classList.contains('collapse') &&
        !document.getElementsByClassName('navbar-collapse')[0].contains(e.target as Node) &&
        (!document.getElementsByClassName('hamburger')[0].contains(e.target as Node))) {
        document.getElementsByClassName('navbar-collapse')[0].classList.add('collapse');
      }
    });
  }

  toggleNav() {
    document.getElementsByClassName('navbar-collapse')[0].classList.toggle('collapse');
  }
}
