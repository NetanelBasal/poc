import {Injectable} from "@angular/core";
import {WidgetResponseStore} from "./widget-response.store";
import {WidgetResponse} from "./widget-response.model";

@Injectable()
export class WidgetResponseService {
  constructor(private store: WidgetResponseStore) {
  }

  getById(widgetId: string) {
    return this.store.select(state => state.entities[widgetId]);
  }

  update(widgetId: string, response: WidgetResponse) {
    this.store.update(state => {
      return {
        ...state,
        entities: {
          ...state.entities,
          [widgetId]: response
        }
      };
    });
  }
}
