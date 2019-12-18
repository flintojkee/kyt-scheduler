import { Injectable } from '@angular/core';
import { StateService } from '@kyt-admin/store/state.service';
import { IUser } from '@kyt/shared/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  constructor(private stateService: StateService) {}
  dispatchUser(user: IUser) {
    this.stateService.dispatch({
      key: 'user',
      payload: { ...user }
    });
  }
  initUser() {
    if (Object.keys(this.stateService.state).indexOf('user') === -1) {
      const user: IUser = {
        user_id: 343561467,
        first_name: 'Denys',
        last_name: 'Vasylenko',
        username: 'flintojkee',
        photo_url: 'https://t.me/i/userpic/320/Mo-wVDly9r8BKl7yBK0EmKseU3gGBlReuKN091gFq8o.jpg'
      };
      this.dispatchUser(user);
    }
  }
  getUserState(): Observable<IUser> {
    this.initUser();
    return this.stateService.state$.pipe(
      map((s) => {
        return s['user'];
      })
    );
  }
}
