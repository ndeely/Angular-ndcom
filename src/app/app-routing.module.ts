import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProjectsComponent} from '@projects/projects.component';
import {HomeComponent} from '@home/home.component';
import {ProjectCategoryComponent} from '@projects/category/project-category.component';
import {WebsitesComponent} from '@websites/websites.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'websites/:id', component: WebsitesComponent},
  {path: 'projects/:id', component: ProjectsComponent},
  {path: 'category/:tag', component: ProjectCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
