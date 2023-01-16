import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class PotionService {

    url = 'https://63c13294376b9b2e647577d8.mockapi.io';
    constructor(private http: HttpClient) { }

    getPotion(): Observable<any> {
        return this.http.get<any>('https://63c13294376b9b2e647577d8.mockapi.io/potion').pipe(map((res: any) => {
            return res;
        }));
    }

}

