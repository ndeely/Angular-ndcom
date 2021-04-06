import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {HomeComponent} from '@core/home/home.component';
import {WebsitesComponent} from '@websites/websites.component';
import {ProjectsComponent} from '@projects/projects.component';
import {ProjectJavaComponent} from '@core/projects/java/project-java.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'websites/:id', component: WebsitesComponent},
  {path: 'projects/:id', component: ProjectsComponent},
  {path: 'projects/java/:id', component: ProjectJavaComponent}

];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
