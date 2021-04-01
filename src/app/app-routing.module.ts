import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WebsitesComponent} from '@websites/websites.component';
import {HomeComponent} from '@core/home/home.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path: 'websites/:id', component: WebsitesComponent}

];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
