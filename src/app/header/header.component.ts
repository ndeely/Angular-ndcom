import {Component, OnInit } from '@angular/core';
import {WebsitesService} from '@websites/websites.service';
import {Website} from '@websites/website.model';
import {Project} from '@projects/project.model';
import {ProjectsService} from '@projects/projects.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sites: Website[];
  projects: Project[];

  constructor(private ws: WebsitesService,
              private ps: ProjectsService) {}

  ngOnInit() {
    this.sites = this.ws.getSites();
    this.projects = this.ps.getProjects();

    window.addEventListener('click', e => {
      if (!document.getElementsByClassName('navbar-collapse')[0].classList.contains('collapse') &&
        !document.getElementsByClassName('navbar-collapse')[0].contains(e.target) &&
        (!document.getElementsByClassName('hamburger')[0].contains(e.target))) {
        document.getElementsByClassName('navbar-collapse')[0].classList.add('collapse');
      }
    });
  }

  toggleNav() {
    document.getElementsByClassName('navbar-collapse')[0].classList.toggle('collapse');
  }
}
