import {Injectable} from "@angular/core";
import {WidgetsStore} from "./widgets.store";
import {Widget} from "./widget.model";
import {Observable} from "rxjs/Observable";
import {CRUD} from "../crud.service";
import * as widgets from "./widgets.store";

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

  set(widgets: Widget[]) {
    const map = widgets.map(widget => new Widget(widget));
    this.widgetsStore.set(map);
  }

  addWidget(widget: Widget) {
    this.widgetsStore.add(widget);
  }

}
