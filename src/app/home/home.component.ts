import { Component, OnInit } from '@angular/core';
import {WebsitesService} from '@websites/websites.service';
import {Website} from '@websites/website.model';
import {Project} from '@projects/project.model';
import {ProjectsService} from '@projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sites: Website[];
  projects: Project[];

  constructor(private ws: WebsitesService,
              private ps: ProjectsService) { }

  ngOnInit(): void {
    this.sites = this.ws.getSites();
    this.projects = this.ps.getProjects();
  }

}
