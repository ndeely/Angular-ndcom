import { Component, OnInit } from '@angular/core';
import {WebsitesService} from '@websites/websites.service';
import {Website} from '@websites/website.model';
import {Project} from '@projects/project.model';
import {ProjectsService} from '@projects/projects.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public sites: Website[];
  public projects: Project[];

  constructor(private ws: WebsitesService,
              private ps: ProjectsService) { }

  ngOnInit(): void {
    this.sites = this.ws.getSites();
    this.projects = this.ps.getProjects();
  }

  openUrl(link: string) {
    window.open(link, '_blank');
  }

}
