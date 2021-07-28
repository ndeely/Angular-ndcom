import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@core/app.component';
import { HeaderComponent } from '@core/components/header/header.component';
import {AppRoutingModule} from '@core/app-routing.module';
import { WebsitesComponent } from './websites/websites.component';
import {DropdownDirective} from '@shared/dropdown.directive';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProjectCategoryComponent } from '@projects/category/project-category.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {LoadingSpinnerComponent} from '@shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WebsitesComponent,
    DropdownDirective,
    HomepageComponent,
    ProjectCategoryComponent,
    ProjectsComponent,
    FooterComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
