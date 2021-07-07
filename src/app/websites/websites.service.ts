import {Injectable} from '@angular/core';
import {Website} from '@websites/website.model';

@Injectable({providedIn: 'root'})

export class WebsitesService {

  private websites: Website[] = [
    new Website(
      0,
      'Ruby on Rails',
      `
<p>Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a
model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages.</p>
<p>I have worked with Rails to develop several websites. While I was not familiar with Ruby when I began using Rails, I picked it up very
quickly due to my familiarity with other object-oriented languages such as Java, Python and C#. My work with Rails was primarily done using
MySQL for the database, but I have also worked with it using PostgreSQL.</p>
<p>Below, you can find a link to an example social media website I have made using Ruby on Rails.</p>
<p class="info">This website is hosted externally on Heroku due to the limits of my hosting plan for this website. Heroku hosts this
website for free which I appreciate immensely, but due to this, it does have some limitations. It does not allow me to store user images or
videos to limit the server space that I use, and it can be slow to load the site for the first time.</p>
`,
      'assets/images/rubyonrails.png',
      ['github.com/ndeely/FriendMeter', 'guarded-meadow-50667.herokuapp.com']
    ),
    new Website(
      1,
      'Angular',
      `
<p>Angular is a is a TypeScript-based open-source web application framework.</p>
<p>I have worked with Angular to develop several single page web applications. You are currently using one of these applications to view
this portfolio. The source code for this website is available on GitHub using the link below.</p>
<div class="row">
  <div class="col-xs-12 centered">
    <a class="btn btn-primary" href="https://github.com/ndeely/Angular-ndcom" target="_blank">
      <i class="fa fa-github"></i> View GitHub Repository
    </a>
  </div>
</div>
<p>I have worked through several tutorials on the Angular framework, building on MVC knowledge gained from working with Ruby on Rails. When
my work with Ruby on Rails concluded, I began working with other frameworks such as Angular and Laravel, using PHP or NodeJS in the back
end, and working with MySQL, PostgreSQL or MongoDB as the database.</p>
<p>Below, you can find a link to another example website I have made using Angular.</p>
`,
      'assets/images/angular.png',
      ['github.com/ndeely/Angular-Ingredients-Shop', 'www.nialldeely.com/angular']
    ),
    new Website(
      2,
      'NodeJS',
      `
<p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that can be used to build websites and
applications.</p>
<p>I have worked through tutorials with NodeJS to learn the fundamentals using a complete guide to the framework. I have used it to render
complete content views to the front end, and also to return JSON data to a more developed front end. My work with NodeJS was primarily done
using MongoDB for the database, but I have also worked with MySQL.</p>
`,
      'assets/images/nodejs.png',
      ['github.com/ndeely/nodejs-complete-guide']
    ),
    new Website(
      3,
      'WordPress',
      `
<p>WordPress is a free and open-source content-management system (CMS) written in PHP and paired with a MySQL or MariaDB database.
WordPress is one of the most popular CMSs available and is used by millions of websites globally.</p>
<p>I worked with WordPress as a Web Developer for almost 4 years, and have created custom templates and plugins to use this CMS to it's
full potential.</p>
<p class="info">I am currently working on a WordPress website to showcase my knowledge of this CMS.</p>
`,
      'assets/images/wordpress.png',
      []
    ),
    new Website(
      4,
      'Laravel',
      `
<p>Laravel is a free, open-source PHP web framework intended for the development of web applications following the model–view–controller
(MVC) architectural pattern.</p>
<p>While I do not have formal work experience using Laravel, I have begun working with it for projects and have adapted to it very quickly.
This is primarily due to my familiarity with PHP through working with WordPress and a PHP back end as a web developer for almost 4 years,
and my familiarity with MVC frameworks from working on projects built using other MVC frameworks such as Rails and Angular.</p>
<p class="info">I am currently working on a Laravel website to showcase my knowledge of this framework.</p>
`,
      'assets/images/laravel.png',
      []
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
