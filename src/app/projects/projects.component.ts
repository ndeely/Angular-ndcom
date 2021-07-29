import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

// models
import {Project} from '@projects/project.model';
// services
import {ProjectsService} from '@projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  selectedProject: Project;
  projects: Project[];
  isLoading = false;
  subscription: Subscription;

  constructor(private ps: ProjectsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projects = this.ps.getProjects();
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        if (params.id) {
          const id = +params.id;
          setTimeout(() => { this.selectProject(id); }, 100);
        }
      }
    );
  }

  selectProject(id: number) {
    const projectButtons = document.getElementById('projects')
      .getElementsByTagName('button');
    if (this.selectedProject) {
      const previousId = this.selectedProject.id;
      projectButtons[previousId].classList.toggle('active');
    }
    if (id < this.projects.length) {
      this.selectedProject = this.projects[id];
      projectButtons[id].classList.toggle('active');
    }
  }

  onClick(url: string) {
    this.isLoading = true;
    window.location.href = 'https://' + url;
    setTimeout(() => { this.isLoading = false; }, 1000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
