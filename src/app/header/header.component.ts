import {Component, OnInit} from '@angular/core';
import {WebsitesService} from '@websites/websites.service';
import {Website} from '@websites/website.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sites: Website[];

  constructor(private ws: WebsitesService) { }

  ngOnInit() {
    this.sites = this.ws.getSites();
  }
}
