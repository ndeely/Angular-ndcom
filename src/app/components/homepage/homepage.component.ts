import { Component, OnInit } from '@angular/core';

// models
import {Website} from '@websites/website.model';
import {Project} from '@projects/project.model';
// services
import {WebsitesService} from '@websites/websites.service';
import {ProjectsService} from '@projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
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
    const websiteButtons = document.getElementsByClassName('menu')[0]
      .getElementsByTagName('button');
    if (this.selectedSite) {
      const previousId = this.selectedSite.id;
      websiteButtons[previousId].classList.toggle('active');
    }
    this.selectedSite = this.sites[id];
    websiteButtons[id].classList.toggle('active');
  }

  selectProject(id: number) {
    const projectButtons = document.getElementsByClassName('menu')[1]
      .getElementsByTagName('button');
    if (this.selectedProject) {
      const previousId = this.selectedProject.id;
      projectButtons[previousId].classList.toggle('active');
    }
    this.selectedProject = this.projects[id];
    projectButtons[id].classList.toggle('active');
  }

  onClick(url: string) {
    this.isLoading = true;
    window.location.href = 'https://' + url;
    setTimeout(() => { this.isLoading = false; }, 1000);
  }

}
