import { Component, OnInit } from '@angular/core';
import { UserLoggato } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
    selector: 'app-quiz-battuto',
    templateUrl: './quiz-battuto.component.html',
    styleUrls: ['./quiz-battuto.component.scss']
})
export class QuizBattutoComponent implements OnInit {
    constructor(private afAuth: AngularFireAuth) { }

    ngOnInit() {
        //sessione dell'utente loggato
        this.afAuth.authState.subscribe((user) => {
            if (user && user.displayName) {

                let utenteLoggato = {} as UserLoggato;
                utenteLoggato.displayName = user.displayName;
                utenteLoggato.role = 'utente';
                utenteLoggato.session = '/controogniaspettativa';
                localStorage.setItem('utenteLoggato', JSON.stringify(utenteLoggato));

                JSON.parse(localStorage.getItem('user')!);
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });
        this.hideAnimatedDivUno();
        this.hideAnimatedDivDue();
        this.hideAnimatedDivTre();
    }

    hideAnimatedDivUno() {
        let animatedDiv = document.getElementById('primo');
        animatedDiv!.style.display = 'none';
        setTimeout(() => {
            animatedDiv!.style.display = 'block';
        }, 1000);
    }

    hideAnimatedDivDue() {
        let animatedDiv = document.getElementById('secondo');
        animatedDiv!.style.display = 'none';
        setTimeout(() => {
            animatedDiv!.style.display = 'block';
        }, 3000);
    }

    hideAnimatedDivTre() {
        let animatedDiv = document.getElementById('terzo');
        animatedDiv!.style.display = 'none';
        setTimeout(() => {
            animatedDiv!.style.display = 'block';
        }, 5000);
    }
}
