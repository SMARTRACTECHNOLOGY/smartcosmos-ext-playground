import {Injectable} from 'angular2/core';
import {OBJECTS} from './mock-objects';

/**
 * The Objects RDAO Service handles the basic CRUD operations for Objects.
 * @return {ObjectsRdaoService} service for handling data operations.
 */
@Injectable()
export class ObjectsRdaoService {
  /**
   * [getObjects description]
   * @return {[type]} [description]
   */
  getObjects() {

    var keys = Object.keys(OBJECTS);

    var values = keys.map(function(v) { return OBJECTS[v]; });

    return Promise.resolve(values);
  }

  getObject(objectUrn: string) {
    return Promise.resolve(OBJECTS[objectUrn]);
  }
}
