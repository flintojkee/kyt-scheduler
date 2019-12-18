import { Injectable } from '@angular/core';
import { RestService } from '@kyt/shared/utils';
import { HttpClient } from '@angular/common/http';
import { IRepetition } from '@kyt/shared/models';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends RestService {
  constructor(http: HttpClient) {
    super(http);
  }

  updateRepetition(
    { room_number, repetition_date, start_time, end_time, number_of_people }: IRepetition,
    user_id: number
  ) {
    console.log(repetition_date);
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

  getRepetitions() {
    return this.get('repetition/');
  }
}
