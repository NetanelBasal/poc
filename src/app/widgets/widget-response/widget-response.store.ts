import {HashMap, Store} from "../../store";
import {WidgetResponse} from "./widget-response.model";
import {Injectable} from "@angular/core";

interface State {
  entities: HashMap<WidgetResponse>;
}

const initialState: State = {
  entities: {}
};

@Injectable()
export class WidgetResponseStore extends Store<State> {
  constructor() {
    super(initialState);
  }
}
