import {ObjectsRdaoService, Thing, ThingDetailComponent} from "../things/things";
import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES, ThingDetailComponent],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html'),
  providers: [ObjectsRdaoService]
})
export class Home implements OnInit {
  things: Thing[] = [];
  selectedThing: Thing;

  constructor(private objectsRdaoService: ObjectsRdaoService) { }

  ngOnInit() {
    this.getObjects();
  }

  onSelect(thing: Thing) { this.selectedThing = thing; }

  private getObjects() {
    this.objectsRdaoService.getObjects().then(things => this.things = things);
  }


}
