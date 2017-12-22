import {HashMap, Store} from '../../store';
import {WidgetsVisibilty} from './widgets-visibilty.model';

interface State {
  entities: HashMap<WidgetsVisibilty>;
}

const initialState: State = {
  entities: {}
};

export class WidgetsVisibiltyStore extends Store<State> {
  constructor() {
    super(initialState);
  }
}
