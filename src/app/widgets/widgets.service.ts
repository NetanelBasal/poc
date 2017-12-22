import {Injectable} from '@angular/core';
import {WidgetsStore} from './widgets.store';
import {Widget} from './widget.model';

@Injectable()
export class WidgetsService {

  constructor(private widgetsStore: WidgetsStore) {
  }

  selectWidgets() {
    return this.widgetsStore.select(state => state.entities);
  }

  selectActive() {
    return this.widgetsStore.select(state => state.active);
  }

  addWidget(widget: Widget) {
    this.widgetsStore.update(state => {
      return {
        ...state,
        entities: {
          ...state.entities,
          [widget.id]: new Widget({id: 2})
        }
      };
    });
  }

}
