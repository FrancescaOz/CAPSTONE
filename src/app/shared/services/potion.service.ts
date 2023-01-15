import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PotionService  {

  url =  'https://63c13294376b9b2e647577d8.mockapi.io';
  constructor(private http: HttpClient) { }

  getPotion(): Observable<any>{
   return this.http.get<any>('https://63c13294376b9b2e647577d8.mockapi.io/potion');
  }

}

