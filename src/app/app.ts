import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../style/app.scss';

import {Api} from './services/api/api';
import {Home} from './home/home';
import {About} from "./about/about";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS, Api],
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/home', component: Home, name: 'Home', useAsDefault: true},
  {path: '/about', component: About, name: 'About'}
])
export class App {
  github: string = 'https://github.com/SMARTRACTECHNOLOGY/smartcosmos-ext-playground';

  constructor(public api: Api) {
  }
}
