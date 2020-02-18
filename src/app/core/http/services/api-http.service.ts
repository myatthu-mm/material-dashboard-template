import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  constructor(private http: HttpClient) { }

  public get(url: string, options?: any): Observable<any> {
    return this.http.get(url, options);
  }

  public post(params: any, options?: any): Observable<any> {
    return this.http.post(params.url, params.body, options);
  }

  public put(params: any, options?: any): Observable<any> {
    return this.http.put(params.url, params.body, options);
  }

  public delete(url: string, options?: any): Observable<any> {
    return this.http.delete(url, options);
  }
}
