import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

// models
import {Website} from '@websites/website.model';
// services
import {WebsitesService} from '@websites/websites.service';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss']
})

export class WebsitesComponent implements OnInit, OnDestroy {
  selectedSite: Website = null;
  sites: Website[];
  isLoading = false;

  subscription: Subscription;

  constructor(private ws: WebsitesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sites = this.ws.getSites();
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        if (params.id) {
          const id = +params.id;
          setTimeout(() => { this.selectSite(id); }, 100);
        }
      }
    );
  }

  selectSite(id: number) {
    const websiteButtons = document.getElementById('sites')
      .getElementsByTagName('button');
    if (this.selectedSite) {
      const previousId = this.selectedSite.id;
      websiteButtons[previousId].classList.toggle('active');
    }
    if (id < this.sites.length) {
      this.selectedSite = this.sites[id];
      websiteButtons[id].classList.toggle('active');
    }
  }

  onClick(url: string) {
    this.isLoading = true;
    window.location.href = 'https://' + url;
    setTimeout(() => { this.isLoading = false; }, 1500);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
