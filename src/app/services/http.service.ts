import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public api = 'http://localhost:5050/api/';
  // public api = 'http://178.128.1.11:5050/api/';

  constructor(
    private httpClient: HttpClient, private http: Http
  ) {
    // this.api = 'http://localhost:5050/api/';
  }

  Post(path, data) {
    console.log(this.api + path);
    const params = JSON.stringify(data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.api + path, params, { headers: headers }).pipe(map((res) => {
      return res.json();
    }));
  }

  prueba(p) {
    console.log(this.api + p);
  }
}
