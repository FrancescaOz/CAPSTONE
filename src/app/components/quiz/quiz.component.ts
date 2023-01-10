import { Component, OnInit, Input } from '@angular/core';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { QuizService } from 'src/app/shared/services/quiz.service';



@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {

    data: any[] = [];
    constructor(private srv: QuizService) { }

    ngOnInit(): void {
        this.srv.getQuestion();
        console.log(this.srv.getQuestion())
        }

    }








