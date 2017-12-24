import {Injectable} from "@angular/core";
import {WidgetUIStateStore} from "./widget-ui-state.store";
import {WidgetUIState} from "./widgets-ui-state.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class WidgetsUIStateService {

  constructor(private widgetUIStateStore: WidgetUIStateStore) {
  }

  select() {
    return this.widgetUIStateStore.select(state => state.entities);
  }

  getById(widgetId): Observable<WidgetUIState> {
    return this.widgetUIStateStore.select(state =>
      state.entities[widgetId] && state.entities[widgetId]).filter(Boolean);
  }

  visible(widgetId): Observable<boolean> {
    return this.getById(widgetId).map(widget => widget.visible);
  }

  ready(widgetId): Observable<boolean> {
    return this.getById(widgetId).map(widget => widget.ready).filter(Boolean);
  }

  setReady(widgetId) {
    this.widgetUIStateStore.update(state => {
      return {
        ...state,
        entities: {
          ...state.entities,
          [widgetId]: {
            ...state.entities[widgetId],
            ready: true
          }
        }
      };
    });
  }

  update(widgetId) {
    this.widgetUIStateStore.update(state => {
      return {
        ...state,
        entities: {
          ...state.entities,
          [widgetId]: new WidgetUIState({visible: true, ready: false})
        }
      };
    });
  }
}
