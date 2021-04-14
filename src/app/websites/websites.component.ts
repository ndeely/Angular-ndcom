import { Component, OnInit } from '@angular/core';
import {WebsitesService} from '@websites/websites.service';
import {Website} from '@websites/website.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit {
  site: Website;
  id: number;

  constructor(private ws: WebsitesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.site = this.ws.getSite(this.id);
      }
    )
  }

  onClick(url: string) {
    window.location.href = 'https://' + url;
  }

}