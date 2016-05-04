import { Component, Input } from 'angular2/core';
import {Thing} from './thing';

@Component({
  selector: 'sc-thing-detail',
  template: require('./thing-detail.component.html')
})
export class ThingDetailComponent {
  @Input()
  thing: Thing;
}
