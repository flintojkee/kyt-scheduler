import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export abstract class RestService {
  protected baseUrl = 'environment.apiUrl';
  constructor(protected http: HttpClient) {}

  protected get<R>(relativeUrl: string): Observable<R> {
    return this.http.get<R>(this.baseUrl + relativeUrl);
  }

  protected post<T, R>(relativeUrl: string, data: T, options?): Observable<any> {
    return this.http.post<R>(this.baseUrl + relativeUrl, data, options);
  }
  protected delete(relativeUrl: string) {
    return this.http.delete(this.baseUrl + relativeUrl);
  }
  protected put<T>(relativeUrl: string, data: T) {
    return this.http.put(this.baseUrl + relativeUrl, data);
  }
}
