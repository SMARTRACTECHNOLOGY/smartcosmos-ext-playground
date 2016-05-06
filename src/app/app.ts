import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../style/app.scss';

import {Api} from './api/api';
import {Home} from './home/home';
import {Objects} from './objects/objects';
import {Relationships} from './relationships/relationships';

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
  { path: '/', component: Home, name: 'Home', useAsDefault: true },
  { path: '/objects', component: Objects, name: 'Objects' },
  { path: '/relationships', component: Relationships, name: 'Relationships' }
])
export class App {
  github: string = 'https://github.com/SMARTRACTECHNOLOGY/smartcosmos-ext-playground';

  constructor(public api: Api) {
  }
}
