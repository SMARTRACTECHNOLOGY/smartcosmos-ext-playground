import { Component, Input } from 'angular2/core';
import {ObjectModel} from './object-model';

@Component({
  selector: 'sc-object-detail',
  template: require('./object-detail.component.html'),
  styles: [require('./object-detail.component.scss')]
})
export class ObjectDetailComponent {
  @Input()
  object: ObjectModel;
}
