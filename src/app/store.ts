import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

export interface HashMap<T> {
  [id: string]: T;
}

export class Store<T> {
  private _store: BehaviorSubject<T>;

  constructor(initialState) {
    this._store = new BehaviorSubject(initialState);
  }

  select<R>(project: (store: T) => R): Observable<R> {
    return this._store$.map(project).distinctUntilChanged();
  }

  value(): T {
    return this._store.getValue();
  }

  update(newStateFn: (state: T) => T) {
    const newState = newStateFn(this.value());
    console.log('newState', newState);
    this.dispatch(newState);
  }

  private dispatch(state: T) {
    this._store.next(state);
  }

  private get _store$() {
    return this._store.asObservable();
  }

}
