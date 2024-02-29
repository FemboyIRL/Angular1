import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class MichisService {
  API_URL = `https://api.thecatapi.com/v1/`;
  API_KEY = "live_dfGNjMQZcx86RTaaIckppVLtStZpwkP9Kfw6Z12H42hymKg9H6Rk8KbXRCpfnAER";
  url = ""
  constructor(private http: HttpClient) {

  }
  nuevoMichi(){
    this.url = `${this.API_URL}images/search`;
    return this.http.get(`${this.API_URL}images/search`,{
      headers: {
        'x-api-key': this.API_KEY,
        'content-type': 'application/json;'
      }
    })
  }
}

