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
  styleUrls: ['./websites.component.scss', '../../assets/css/menu.scss']
})

export class WebsitesComponent implements OnInit, OnDestroy {
  sites: Website[];
  isLoading = false;
  openId: number = null;

  subscription: Subscription;

  constructor(private ws: WebsitesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sites = this.ws.getSites();
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        if (params.id) {
          setTimeout(() => { this.toggleSite(+params.id); }, 100);
        }
      }
    );
  }

  toggleSite(id: number) {
    const websiteButtons = document.getElementById('sites')
      .getElementsByClassName('menu-button');
    if (id < this.sites.length) {
      websiteButtons[id].classList.toggle('active');
      if (this.openId === null) {
        this.openId = id;
      } else {
        if (this.openId !== id) {
          websiteButtons[this.openId].classList.toggle('active');
          this.openId = id;
        } else {
          this.openId = null;
        }
      }
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
