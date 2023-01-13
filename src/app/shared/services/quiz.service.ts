import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class QuizService {

    // url =  https://opentdb.com/api_config.php;
    constructor(private http: HttpClient) { }

   getQuestion(): Observable<any>{
    return this.http.get<any>('https://opentdb.com/api.php?amount=10');
   }
}



