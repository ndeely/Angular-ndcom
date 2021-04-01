import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@core/app.component';
import { HeaderComponent } from '@header/header.component';
import {AppRoutingModule} from '@core/app-routing.module';
import { WebsitesComponent } from './websites/websites.component';
import {DropdownDirective} from '@shared/dropdown.directive';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WebsitesComponent,
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
