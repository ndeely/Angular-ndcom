import { Component, OnInit } from '@angular/core';

// models
import {Website} from '@websites/website.model';
// services
import {WebsitesService} from '@websites/websites.service';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss']
})

export class WebsitesComponent implements OnInit {
  selectedSite: Website = null;
  sites: Website[];
  isLoading = false;

  constructor(private ws: WebsitesService) { }

  ngOnInit(): void {
    this.sites = this.ws.getSites();
  }

  selectSite(id: number) {
    const websiteButtons = document.getElementById('sites')
      .getElementsByTagName('button');
    if (this.selectedSite) {
      const previousId = this.selectedSite.id;
      websiteButtons[previousId].classList.toggle('active');
    }
    this.selectedSite = this.sites[id];
    websiteButtons[id].classList.toggle('active');
  }

  onClick(url: string) {
    this.isLoading = true;
    window.location.href = 'https://' + url;
    setTimeout(() => { this.isLoading = false; }, 1500);
  }

}
