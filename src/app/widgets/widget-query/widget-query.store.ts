import {HashMap, Store} from "../../store";
import {WidgetQuery} from "./widget-query.model";
import {Injectable} from "@angular/core";

interface State {
  entities: HashMap<WidgetQuery>
}

const initialState: State = {
  entities: {}
};

@Injectable()
export class WidgetQueryStore extends Store<State> {
  constructor() {
    super(initialState);
  }
}
