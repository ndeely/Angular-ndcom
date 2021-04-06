import {Injectable} from '@angular/core';
import {Project} from '@projects/project.model';

@Injectable({providedIn: 'root'})

export class ProjectsService {
  private projects: Project[] = [];

  constructor() {
  }

  getProjects() {
    return this.projects.slice();
  }

  getProject(id: number) {
    return this.projects[id];
  }
}
