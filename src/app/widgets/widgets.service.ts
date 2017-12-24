import {Injectable} from "@angular/core";
import {WidgetsStore} from "./widgets.store";
import {Widget} from "./widget.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class WidgetsService {

  constructor(private widgetsStore: WidgetsStore) {
  }

  selectWidgets() {
    return this.widgetsStore.select(state => state.entities);
  }

  asArray(): Observable<Widget[]> {
    return this.widgetsStore.asArray();
  }

  selectActive() {
    return this.widgetsStore.select(state => state.active);
  }

  addWidget(widget: Widget) {
    this.widgetsStore.update(state => {
      return {
        ...state,
        ids: [...state.ids, widget.id],
        entities: {
          ...state.entities,
          [widget.id]: widget
        }
      };
    });
  }

}
