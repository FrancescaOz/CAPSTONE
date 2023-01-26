import { Component, OnInit } from '@angular/core';
import { UserLoggato } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-no-acquisti',
  templateUrl: './no-acquisti.component.html',
  styleUrls: ['./no-acquisti.component.scss']
})
export class NoAcquistiComponent implements OnInit {

    constructor(private afAuth: AngularFireAuth) { }

    ngOnInit() {
        this.afAuth.authState.subscribe((user) => {
            console.log(user, 'prova local');
            if (user) {
                //sessione dell'utente loggato
                let nomeSessioneUser = user.uid;
                    let utenteLoggato = {} as UserLoggato;
                        utenteLoggato.displayName = (user.displayName !== null)?user?.displayName: '';
                        utenteLoggato.role = 'utente';
                        utenteLoggato.session = '/ops';
                        utenteLoggato.uid = user.uid;
                        localStorage.removeItem(nomeSessioneUser);
                        localStorage.setItem(nomeSessioneUser, JSON.stringify(utenteLoggato));

                JSON.parse(localStorage.getItem('user')!);
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });

    }
}
