import { Component, OnInit } from '@angular/core';
import {WebsitesService} from '@websites/websites.service';
import {Website} from '@websites/website.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sites: Website[];

  constructor(private ws: WebsitesService) { }

  ngOnInit(): void {
    this.sites = this.ws.getSites();
  }

}
