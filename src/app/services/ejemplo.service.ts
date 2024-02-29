import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EjemploService {
  correo = "";
  correob = "Ingresa tu correo";
  API_URL = 'https://jsonplaceholder.typicode.com/'
  constructor(private http: HttpClient) {

  }

  obtenerlista() {
    return this.http.get(`${this.API_URL}posts`, {
      headers: {
        'content-type': 'application/json;'
      }
    })
  }
  onClickButton(text: string) {
    console.log(text);
    this.correo = text
  }
}
