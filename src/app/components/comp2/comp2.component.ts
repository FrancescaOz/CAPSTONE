import { Component, OnInit } from '@angular/core';
import { UserLoggato } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
    constructor(private afAuth: AngularFireAuth) { }

    ngOnInit(): void {

        this.afAuth.authState.subscribe((user) => {
            console.log(user, 'prova local');
            if (user) {
                //sessione dell'utente loggato
                let nomeSessioneUser = user.uid;
                    let utenteLoggato = {} as UserLoggato;
                        utenteLoggato.displayName = (user.displayName !== null)?user?.displayName: '';
                        utenteLoggato.role = 'utente';
                        utenteLoggato.session = '/bussi';
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
