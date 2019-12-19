import { Injectable } from '@angular/core';
import { RestService } from '@kyt/shared/utils';
import { HttpClient } from '@angular/common/http';
import { IRepetition } from '@kyt/shared/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends RestService {
  constructor(http: HttpClient) {
    super(http);
  }

  createRepetition(
    { room_number, repetition_date, start_time, end_time, number_of_people }: IRepetition,
    user_id: number
  ) {
    const d = `${new Date(repetition_date).getFullYear()}-${new Date(repetition_date).getMonth() +
      1}-${new Date(repetition_date).getDate()}`;
    const r = {
      repetition_date: d,
      room_number,
      start_time,
      end_time,
      number_of_people,
      user_id
    };
    return this.post('repetition/', r);
  }
  updateRepetition(data) {
    return this.put('repetition/' + data.repetition_id, data);
  }
  getRepetitions() {
    return this.get('repetition/');
  }
  getUser(id: number) {
    return this.get('user/' + id).pipe(map((res: any) => res.data.user));
  }
}
