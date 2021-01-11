import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BACKEND_URL: string = 'http://localhost:8082';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  visualizar() {
    console.log('chamou o serviço')
    return this.http.get(this.BACKEND_URL + '/visualizar', this.httpOptions)
  }
  
}
