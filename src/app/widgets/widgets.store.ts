import {Widget} from './widget.model';
import {HashMap, Store} from '../store';
import {Injectable} from '@angular/core';

interface State {
  entities: HashMap<Widget>,
  active: number;
}

const initialState: State = {
  entities: {
    '3': new Widget({id: 3})
  },
  active: 0
};

@Injectable()
export class WidgetsStore extends Store<State> {
  constructor() {
    super(initialState);
  }
}

