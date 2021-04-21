import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@core/app.component';
import { HeaderComponent } from '@header/header.component';
import {AppRoutingModule} from '@core/app-routing.module';
import { WebsitesComponent } from './websites/websites.component';
import {DropdownDirective} from '@shared/dropdown.directive';
import { HomeComponent } from './home/home.component';
import { ProjectCategoryComponent } from '@projects/category/project-category.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WebsitesComponent,
    DropdownDirective,
    HomeComponent,
    ProjectCategoryComponent,
    ProjectsComponent,
    FooterComponent
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
