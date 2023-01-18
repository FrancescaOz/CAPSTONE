import { Component, OnInit } from '@angular/core';
import { UserLoggato } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
    selector: 'app-comp5',
    templateUrl: './comp5.component.html',
    styleUrls: ['./comp5.component.scss']
})
export class Comp5Component implements OnInit {
    constructor(private afAuth: AngularFireAuth) { }

    ngOnInit() {
        //sessione dell'utente loggato
        this.afAuth.authState.subscribe((user) => {
            if (user && user.displayName) {

                let utenteLoggato = {} as UserLoggato;
                utenteLoggato.displayName = user.displayName;
                utenteLoggato.role = 'utente';
                utenteLoggato.session = '/cambiamenti';
                localStorage.setItem('utenteLoggato', JSON.stringify(utenteLoggato));

                JSON.parse(localStorage.getItem('user')!);
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });
        this.hideAnimatedDiv()
    }

    hideAnimatedDiv() {
        let animatedDiv = document.getElementById('animazione');
        animatedDiv!.style.display = 'none';
        setTimeout(() => {
            animatedDiv!.style.display = 'block';
        }, 7000);
    }



}
