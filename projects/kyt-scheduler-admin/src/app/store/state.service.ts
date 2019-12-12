import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { scan, startWith, shareReplay, map } from 'rxjs/operators';

interface StateObject {
  [prop: string]: any;
}
export interface StateEntry {
  key: string;
  payload: any;
}
@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor() {}

  private stateSubject = new BehaviorSubject({});
  get state() {
    return this.stateSubject.value;
  }
  private initialState: StateObject = {
    app: 'Kyt scheduler admin'
  };

  private _state$ = this.stateSubject.asObservable().pipe(
    scan((acc: StateObject, newVal: StateObject) => {
      // create a new object
      return { ...acc, ...newVal };
    }, this.initialState),
    startWith(this.initialState),
    shareReplay(1)
  );

  get state$() {
    return this._state$;
  }

  dispatch(obj: StateEntry) {
    this.stateSubject.next({
      [obj.key]: obj.payload
    });
  }
}
