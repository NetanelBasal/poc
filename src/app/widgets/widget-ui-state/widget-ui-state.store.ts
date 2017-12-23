import {HashMap, Store} from '../../store';
import {WidgetUIState} from "./widgets-ui-state.model";

interface State {
  entities: HashMap<WidgetUIState>;
}

const initialState: State = {
  entities: {}
};

export class WidgetUIStateStore extends Store<State> {
  constructor() {
    super(initialState);
  }
}
