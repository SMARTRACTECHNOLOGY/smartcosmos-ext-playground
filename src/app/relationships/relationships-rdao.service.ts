import {Injectable} from 'angular2/core';
import {RELATIONSHIPS} from './mock-relationships';

/**
 * The Relationship RDAO Service handles the basic CRUD operations for Relationships.
 * @return {RelationshipRdaoService} service for handling data operations.
 */
@Injectable()
export class RelationshipRdaoService {
  /**
   * [getRelationships description]
   * @return {Relationship array} [description]
   */
  getRelationships() {
    return Promise.resolve(RELATIONSHIPS);
  }
}
