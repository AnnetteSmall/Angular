import { Injectable } from '@angular/core';
import {Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServiceService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://http-requests-udemy.firebaseio.com/data.json', servers, {headers: headers});
    return this.http.put('https://http-requests-udemy.firebaseio.com/data.json', servers, {headers: headers});
  }

  getServers() {
    return this.http.get('https://http-requests-udemy.firebaseio.com/data')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
}
