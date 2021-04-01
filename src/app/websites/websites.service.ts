import {Injectable} from '@angular/core';
import {Website} from '@websites/website.model';

@Injectable({providedIn: 'root'})

export class WebsitesService {

  private websites: Website[] = [
    new Website(
      0,
      'WordPress',
      'WordPress is one of the most popular content management systems available and is used by ' +
      'millions of websites globally.',
      'assets/images/wordpress.png',
      'www.nialldeely.com/wp'
    ),
    new Website(
      1,
      'Laravel',
      'Laravel is a popular MVC framework for building websites using the scripting language PHP.',
      'assets/images/laravel.png',
      'www.nialldeely.com/laravel'
    ),
    new Website(
      2,
      'Angular',
      'Angular is a popular MVC framework for building websites using the scripting language JavaScript.',
      'assets/images/angular.png',
      'www.nialldeely.com/angular'
    ),
    new Website(
      3,
      'Ruby on Rails',
      'Ruby On Rails is a popular MVC framework for building websites using the programming language Ruby.',
      'assets/images/rubyonrails.png',
      'guarded-meadow-50667.herokuapp.com'
    )
  ];

  constructor() {
  }

  getSites() {
    return this.websites.slice();
  }

  getSite(id: number) {
    return this.websites[id];
  }
}
