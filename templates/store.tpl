import {HashMap, Store} from "../../store";
import { {{pascalCase name}} } from "./{{dashCase name}}.model";
import {Injectable} from "@angular/core";

interface State {
  entities: HashMap<{{pascalCase name}}>
}

const initialState: State = {
  entities: {}
};

@Injectable()
export class {{pascalCase name}}Store extends Store<State> {
  constructor() {
    super(initialState);
  }
}
