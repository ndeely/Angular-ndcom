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
  styleUrls: ['./projects.component.scss', '../../assets/css/menu.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[];
  isLoading = false;
  openId: number = null;

  subscription: Subscription;

  constructor(private ps: ProjectsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projects = this.ps.getProjects();
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        if (params.id) {
          setTimeout(() => { this.toggleProject(+params.id); }, 100);
        }
      }
    );
  }

  toggleProject(id: number) {
    const projectButtons = document.getElementById('projects')
      .getElementsByClassName('menu-button');
    if (id < this.projects.length) {
      projectButtons[id].classList.toggle('active');
      if (this.openId === null) {
        this.openId = id;
      } else {
        if (this.openId !== id) {
          projectButtons[this.openId].classList.toggle('active');
          this.openId = id;
        } else {
          this.openId = null;
        }
      }
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
