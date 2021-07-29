import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import {HomepageComponent} from '@core/components/homepage/homepage.component';
import {WebsitesComponent} from '@websites/websites.component';
import {ProjectsComponent} from '@projects/projects.component';
import {ProjectCategoryComponent} from '@projects/category/project-category.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'websites/:id', component: WebsitesComponent},
  {path: 'websites', component: WebsitesComponent},
  {path: 'projects/:id', component: ProjectsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'category/:tag', component: ProjectCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
