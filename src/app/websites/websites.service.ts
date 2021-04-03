import {Injectable} from '@angular/core';
import {Website} from '@websites/website.model';

@Injectable({providedIn: 'root'})

export class WebsitesService {

  private websites: Website[] = [
    new Website(
      0,
      'WordPress',
      'WordPress is a free and open-source content management system (CMS) written in PHP and paired ' +
      'with a MySQL or MariaDB database. ' +
      'WordPress is one of the most popular CMSs available and is used by ' +
      'millions of websites globally.<br><br>' +
      'I have worked with WordPress as a Web Developer for over 3 years, and have created custom templates ' +
      'and plugins to use this CMS to it\'s full potential.<br><br>' +
      'Below, you can find a link to an example website I have made using WordPress.',
      'assets/images/wordpress.png',
      'www.nialldeely.com/wp'
    ),
    new Website(
      1,
      'Laravel',
      'Laravel is a free, open-source PHP web framework intended for the development of web applications following the ' +
      'model–view–controller (MVC) architectural pattern.<br><br>' +
      'While I do not have formal work experience using Laravel, I have begun working with it for projects and have ' +
      'adapted to it very quickly. This is primarily due to my familiarity with PHP through working with WordPress as a ' +
      'web developer for several years, and my familiarity with MVC frameworks from working on projects built using other ' +
      'MVC frameworks such as Ruby on Rails and Angular.<br><br>' +
      'Below, you can find a link to an example website I have made using Laravel.',
      'assets/images/laravel.png',
      'www.nialldeely.com/laravel'
    ),
    new Website(
      2,
      'Angular',
      'Angular is a is a TypeScript-based open-source web application framework.<br><br>' +
      'I have recently began working with Angular to develop several single page web applications. You are currently using one of these ' +
      'applications to view this portfolio. I have worked through several tutorials on the Angular framework, building on MVC knowledge ' +
      'gained from studying Ruby on Rails in my Computer Science college course.<br><br>' +
      'When this course ended in December 2020, I began learning about the viability of other frameworks such as Angular and Laravel.<br><br>' +
      'Below, you can find a link to another example website I have made using Angular.',
      'assets/images/angular.png',
      'www.nialldeely.com/angular'
    ),
    new Website(
      3,
      'Ruby on Rails',
      'Ruby On Rails is a popular model-view-controller (MVC) framework for building websites using the programming language Ruby.<br><br>' +
      'I began using Ruby on Rails in 2020 during my Computer Science college course. While I was not familiar with ' +
      'the programming language Ruby at the time, I picked it up very quickly due to my experience with other object-oriented ' +
      'programming languages such as Java, C# and Python.<br><br>' +
      'I quickly fell in love with the MVC framework approach to building websites, and have continued to develop my knowledge ' +
      'of Ruby on Rails after finishing the college course. I have also branched into several other MVC frameworks which are ' +
      'discussed on this website.<br><br>' +
      'Below, you can find a link to an example social media website I have made using Ruby on Rails. This website is a little different ' +
      'from the others discussed, as it is hosted externally on Heroku due to the limits of my hosting provider for this website. ' +
      'Heroku hosts this website for free, which I appreciate immensely, but due to this the website does have some limitations. ' +
      'It does not allow me to store user images or videos to limit the server space that I use, and it can be slow to load the site initially.',
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
