import { Component, OnInit } from '@angular/core';
import { Quiz, Answer } from 'src/app/shared/services/quiz';
import { QuizService } from 'src/app/shared/services/quiz.service';
import { UserLoggato } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {

    quiz!: Quiz;
    //conteggio punti
    correctCount: number = 0;
    totalCount: number = 0;
    //tempo
    timeLeft: number = 100;
    interval: any;

    constructor(private srv: QuizService, afAuth: AngularFireAuth) { }

    ngOnInit() {
        //sessione dell'utente loggato
       /* this.afAuth.authState.subscribe((user) => {
            if (user && user.displayName) {

                let utenteLoggato = {} as UserLoggato;
                utenteLoggato.displayName = user.displayName;
                utenteLoggato.role = 'utente';
                utenteLoggato.session = '/quiz';
                localStorage.setItem('utenteLoggato', JSON.stringify(utenteLoggato));

                JSON.parse(localStorage.getItem('user')!);
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });*/
        this.start();
    }

    start() {
        this.startTimer();
        this.correctCount = 0;
        this.totalCount = 0;
        this.getNextQuestion();
    }

    startTimer() {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;

            } else {
                this.answerQuestion(false);
            }
        }, 1000)
    }

    resetTimer() {
        this.timeLeft = 100;
    }

    getNextQuestion() {
        this.resetTimer();
        this.srv.getQuestion().subscribe((result: any) => {
            console.log(result.results);
            this.parseTreeResult(result.results);
        }, error => {

        });
    }

    parseTreeResult(questionsList: any) {
        for (let question of questionsList) {
            this.quiz = new Quiz();
            this.quiz.category = question.category;
            this.quiz.difficulty = question.difficulty;
            this.quiz.question = question.question;
            this.quiz.type = question.type;

            let answers = [];

            let correctAnswer = new Answer();
            correctAnswer.answer = question.correct_answer;
            correctAnswer.correctAnswer = true;
            answers.push(correctAnswer);

            for (let answer of question.incorrect_answers) {
                let wrongAnswer = new Answer();
                wrongAnswer.answer = answer;
                wrongAnswer.correctAnswer = false;
                answers.push(wrongAnswer);
            }

            this.quiz.answers = this.shuffle(answers);
        }
    }

    shuffle(a: any) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    answerQuestion(isCorrect: boolean) {
        if (isCorrect) {
            this.correctCount += 1;
        }

        this.totalCount += 1;
        this.getNextQuestion();
    }
}



