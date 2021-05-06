import { Component, OnInit } from '@angular/core';
import {WebsitesService} from '@websites/websites.service';
import {Website} from '@websites/website.model';
import {Project} from '@projects/project.model';
import {ProjectsService} from '@projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedSite: Website = null;
  selectedProject: Project = null;
  sites: Website[];
  projects: Project[];
  isLoading = false;

  constructor(private ws: WebsitesService,
              private ps: ProjectsService) { }

  ngOnInit(): void {
    this.sites = this.ws.getSites();
    this.projects = this.ps.getProjects();
  }

  selectSite(id: number) {
    const list = document.getElementsByClassName('btn-group-vertical')[0]
      .getElementsByTagName('button');
    if (this.selectedSite) {
      const previousId = this.selectedSite.id;
      list[previousId].classList.toggle('active');
    }
    this.selectedSite = this.sites[id];
    list[id].classList.toggle('active');
  }

  selectProject(id: number) {
    const list = document.getElementsByClassName('btn-group-vertical')[1]
      .getElementsByTagName('button');
    if (this.selectedProject) {
      const previousId = this.selectedProject.id;
      list[previousId].classList.toggle('active');
    }
    this.selectedProject = this.projects[id];
    list[id].classList.toggle('active');
  }

  onClick(url: string) {
    this.isLoading = true;
    window.location.href = 'https://' + url;
  }

}
