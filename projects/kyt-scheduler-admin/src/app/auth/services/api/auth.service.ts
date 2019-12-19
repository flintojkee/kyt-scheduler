import { Injectable } from '@angular/core';
import { RestService } from '@kyt/shared/utils';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RestService {
  constructor(http: HttpClient) {
    super(http);
  }

  login(data) {
    return this.post('admin/login', data);
  }
}
