/**
 * @module
 * @description
 * A basic component that displays objects and allows basic operations.
 */
import {ObjectModel} from './object-model';
import {ObjectsRdaoService} from './objects-rdao.service';
import {ObjectDetailComponent} from './object-detail.component';

import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'objects',
  directives: [...FORM_DIRECTIVES, ObjectDetailComponent],
  pipes: [],
  styles: [require('./objects.component.scss')],
  template: require('./objects.component.html'),
  providers: [ObjectsRdaoService]
})
export class Objects implements OnInit {
  objects: ObjectModel[] = [];
  selectedObject: ObjectModel;

  constructor(private objectsRdaoService: ObjectsRdaoService) { }

  ngOnInit() {
    this.getObjects();
  }

  onSelect(object: ObjectModel) { this.selectedObject = object; }

  private getObjects() {
    this.objectsRdaoService.getObjects().then(objects => this.objects = objects);
  }


}
