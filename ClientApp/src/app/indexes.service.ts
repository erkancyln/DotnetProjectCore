import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Index } from "./index";
import { ROOT_URL } from './Config';

@Injectable()
export class IndexesService {
  indexes: Observable<Index[]>
  newindex = Index;
  constructor(private http: HttpClient) {}

  getIndex(): Observable<Index[]> {
    return this.http.get<Index[]>(ROOT_URL + '/indexes');
  }

  addIndex(ind: Index) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Message: ind.message, CreateDate: ind.createDate, LogType: ind.logType
    }
    console.log(ROOT_URL);

    return this.http.post<Index>(ROOT_URL + '/indexes', body, { headers });
  }
  EditIndex(ind: Index) {
    console.log(ind);
    const params = new HttpParams().set('ID', ind.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Message: ind.message, CreateDate: ind.createDate, ID: ind.id, LogType: ind.logType
    }
    return this.http.put<Index>(ROOT_URL + 'indexes/' + ind.id, body, { headers, params })

  }
  DeleteIndex(ind: Index) {
    const params = new HttpParams().set('ID', ind.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Message: ind.message, CreateDate: ind.createDate, ID: ind.id
    }
    return this.http.delete<Index>(ROOT_URL + '/indexes/' + ind.id)

  }
}
