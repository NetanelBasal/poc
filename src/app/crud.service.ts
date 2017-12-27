import {Injectable} from "@angular/core";
import {omit, lensPath, set, assocPath, dissocPath, merge} from "ramda";
import {Entityable} from "./store";

@Injectable()
export class CRUD {
  private readonly ENTITIES_KEY = "entities";

  set<T extends Entityable>(state: T, entities: any[]): T {
    const toHashMap = this.keyBy(entities);
    return assocPath([this.ENTITIES_KEY], toHashMap, state);
  }

  add<T extends Entityable>(state: T, entity): T {
    return assocPath([this.ENTITIES_KEY, entity.id], entity, state);
  }

  addBatch<T extends Entityable>(state: T, entities: any[]): T {
    const toHashMap = this.keyBy(entities);
    return assocPath([this.ENTITIES_KEY], merge(state.entities, toHashMap), state);
  }

  put<T extends Entityable>(state: T, id: string | number, newState): T {
    return assocPath([this.ENTITIES_KEY, id], merge(state.entities.id, newState), state);
  }

  delete<T extends Entityable>(state: T, id: number | string): T {
    return dissocPath([this.ENTITIES_KEY, id], state);
  }

  private keyBy(entities: any[], id = "id") {
    return entities.reduce((acc, entity) => {
      acc[entity[id]] = entity;
      return acc;
    }, {});
  }

}

