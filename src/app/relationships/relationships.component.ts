/**
 * @module
 * @description
 * A basic component that displays objects and allows basic operations.
 */
import {Relationship} from './relationship';
import {RelationshipsRdaoService} from './relationships-rdao.service';
import {RelationshipDetailComponent} from './relationship-detail.component';

import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'relationships',
  directives: [...FORM_DIRECTIVES, RelationshipDetailComponent],
  pipes: [],
  styles: [require('./relationships.component.scss')],
  template: require('./relationships.component.html'),
  providers: [RelationshipsRdaoService]
})
export class Relationships implements OnInit {
  relationships: Relationship[] = [];
  selectedRelationship: Relationship;

  constructor(private relationshipRdaoService: RelationshipsRdaoService) { }

  ngOnInit() {
    this.getRelationships();
  }

  onSelect(relationship: Relationship) { this.selectedRelationship = relationship; }

  private getRelationships() {
    this.relationshipRdaoService.getRelationships().then(relationships => this.relationships = relationships);
  }


}
