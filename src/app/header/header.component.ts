import {Component, OnInit } from '@angular/core';
import {WebsitesService} from '@websites/websites.service';
import {Website} from '@websites/website.model';
import {Project} from '@projects/project.model';
import {ProjectsService} from '@projects/projects.service';
import {NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sites: Website[];
  projects: Project[];
  navOpen = false;
  url = '';
  subscription: Subscription;

  constructor(private ws: WebsitesService,
              private ps: ProjectsService,
              private router: Router) {}

  ngOnInit() {
    this.sites = this.ws.getSites();
    this.projects = this.ps.getProjects();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.navOpen = false;
      }
    });
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}
