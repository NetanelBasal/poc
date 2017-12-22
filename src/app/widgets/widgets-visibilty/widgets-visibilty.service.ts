import {Injectable} from '@angular/core';
import {WidgetsVisibiltyStore} from './widgets-visibilty.store';
import {WidgetsVisibilty} from './widgets-visibilty.model';

@Injectable()
export class WidgetsVisibiltyService {

  constructor(private _widgetsVisibiltyStore: WidgetsVisibiltyStore) {

  }

  select() {
    return this._widgetsVisibiltyStore.select(state => state.entities);
  }

  getById(widgetId) {
    return this._widgetsVisibiltyStore.select(state => state.entities[widgetId]);
  }

  update(widgetId) {
    this._widgetsVisibiltyStore.update(state => {
      return {
        ...state,
        entities: {
          ...state.entities,
          [widgetId]: new WidgetsVisibilty({visible: true})
        }
      };
    });
  }
}
