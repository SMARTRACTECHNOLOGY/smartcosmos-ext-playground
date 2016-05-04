import { Component, Input } from 'angular2/core';
import {Relationship} from './relationship';

@Component({
  selector: 'sc-thing-detail',
  template: require('./thing-detail.component.html')
})
export class RelationshipDetailComponent {
  @Input()
  thing: Relationship;
}
