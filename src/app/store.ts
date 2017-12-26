import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {values} from "ramda";

export interface HashMap<T> {
  [id: string]: T;
}

export interface Entityable {
  entities: HashMap<any>;
}

export class Store<T> {
  private _store: BehaviorSubject<T>;

  constructor(initialState) {
    this._store = new BehaviorSubject(initialState);
  }

  select<R>(project: (store: T) => R): Observable<R> {
    return this._store$.map(project).distinctUntilChanged();
  }

  asArray() {
    return this.select(state => (state as (T & Entityable)).entities).map(values);
  }

  byId(id: number) {
    return this.select(state => (state as (T & Entityable)).entities[id]).filter(Boolean);
  }

  value(): T {
    return this._store.getValue();
  }

  update(newStateFn: (state: T) => T) {
    // console.log('currentState', this.value());
    const newState = newStateFn(this.value());
    // console.log('newState', newState);
    this.dispatch(newState);
  }

  private dispatch(state: T) {
    this._store.next(state);
  }

  private get _store$() {
    return this._store.asObservable();
  }

}
