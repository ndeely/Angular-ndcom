import { Component, OnInit } from '@angular/core';
import {WebsitesService} from '@websites/websites.service';
import {Website} from '@websites/website.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public sites: Website[];

  constructor(private ws: WebsitesService) { }

  ngOnInit(): void {
    this.sites = this.ws.getSites();
  }

  openUrl(link: string) {
    window.open(link, '_blank');
  }

}
