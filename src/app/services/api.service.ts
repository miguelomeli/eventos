import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = 'http://localhost:5050/api/';

  constructor(
    private httpClient: HttpClient,
    private http: Http
  ) { }

  // Petición POST
  Post(path, data) {
    console.log(this.api + path);
    const params = JSON.stringify(data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post( this.api + path, params, { headers: headers }).pipe(map((res) => {
        return res.json();
    }));
  }

  prueba(path) {
    console.log(this.api + path);
  }
}
