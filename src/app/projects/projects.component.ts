import { Component, OnInit } from '@angular/core';

// models
import {Project} from '@projects/project.model';
// services
import {ProjectsService} from '@projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedProject: Project;
  projects: Project[];
  isLoading = false;

  constructor(private ps: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.ps.getProjects();
  }

  selectProject(id: number) {
    const projectButtons = document.getElementById('projects')
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
