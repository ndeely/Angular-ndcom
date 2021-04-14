import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Project} from '@projects/project.model';
import {ProjectsService} from '@projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Project;
  id: number;

  constructor(private ps: ProjectsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.project = this.ps.getProject(this.id);
      }
    )
  }

  onClick(url: string) {
    window.location.href = 'https://' + url;
  }
}