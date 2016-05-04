import {Injectable} from 'angular2/core';
import {THINGS} from './mock-things';

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
    return Promise.resolve(THINGS);
  }
}
