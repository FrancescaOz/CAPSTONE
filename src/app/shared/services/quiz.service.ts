import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
    providedIn: 'root'
})

export class QuizService {

    url = 'https://the-trivia-api.com/api/questions?limit=10&region=IT&difficulty=medium';
    constructor(private http: HttpClient) { }

    getQuestion() {
        return this.http.get(this.url).subscribe(data => {
            console.log(data);
        })

    };



}



