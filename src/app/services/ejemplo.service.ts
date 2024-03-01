import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../tercer-dia/tercer-dia.component';


@Injectable({
  providedIn: 'root',
})
export class EjemploService {
  API_URL = 'https://jsonplaceholder.typicode.com/'


  constructor(private http: HttpClient) {
  }

  obtenerlista(): Observable<any> {
    return this.http.get(`${this.API_URL}posts`, {
      headers: {
        'content-type': 'application/json;'
      }
    })
  }
  MetodoPost(datos: []): Observable<any> {
    return this.http.post(`${this.API_URL}posts`, {
      headers: {
        'content-type': 'application/json;'
      },
    })
  }

  MetodoPut(id: number, datos: User): Observable<any> {
    return this.http.put<any>(`${this.API_URL}posts/1`, datos)
  }
  MetodoDelete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}posts/${id}`)
  }
}