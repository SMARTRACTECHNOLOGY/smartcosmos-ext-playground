import {ObjectsRdaoService} from "../objects/objects";
import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html'),
  providers: [ObjectsRdaoService]
})
export class Home implements OnInit {


  ngOnInit() {
    console.log("Home component.");
  }


}
