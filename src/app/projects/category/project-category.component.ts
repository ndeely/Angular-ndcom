import { Component, OnInit } from '@angular/core';
import {Project} from '@projects/project.model';
import {ProjectsService} from '@projects/projects.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-project-java',
  templateUrl: './project-category.component.html',
  styleUrls: ['./project-category.component.scss']
})
export class ProjectCategoryComponent implements OnInit {
  projects: Project[];
  category: string;

  constructor(private ps: ProjectsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.category = params.tag;
        this.projects = this.ps.getCategory(this.category);
      }
    )
  }

}
