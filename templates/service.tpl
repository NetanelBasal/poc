import {Injectable} from "@angular/core";
import { {{pascalCase name}}Store } from "./{{dashCase name}}.store";

@Injectable()
export class {{pascalCase name}}Service {

  constructor( private {{camelCase name}}Store: {{pascalCase name}}Store) {
  }

  update(params) {
    this.{{camelCase name}}Store.update(state => {
       // return new state
    });
  }
}
