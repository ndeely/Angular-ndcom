import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

// models
import {Project} from '@projects/project.model';
// services
import {ProjectsService} from '@projects/projects.service';

@Component({
  selector: 'app-project-java',
  templateUrl: './project-category.component.html',
  styleUrls: ['./project-category.component.scss']
})
export class ProjectCategoryComponent implements OnInit, OnDestroy {
  projects: Project[];
  category: string;
  subscription: Subscription;

  constructor(private ps: ProjectsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.category = params.tag;
        this.projects = this.ps.getCategory(this.category);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
