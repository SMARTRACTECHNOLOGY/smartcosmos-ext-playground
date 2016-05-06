import { Component, Input } from 'angular2/core';
import {Relationship} from './relationship';

@Component({
  selector: 'sc-relationship-detail',
  template: require('./relationship-detail.component.html')
})
export class RelationshipDetailComponent {
  @Input()
  thing: Relationship;
}
