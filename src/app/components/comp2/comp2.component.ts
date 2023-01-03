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
            if (user && user.displayName) {
                //sessione dell'utente loggato
                    let utenteLoggato = {} as UserLoggato;
                        utenteLoggato.displayName = user.displayName;
                        utenteLoggato.role = 'utente';
                        utenteLoggato.session = '/bussi';
                        localStorage.setItem('utenteLoggato', JSON.stringify(utenteLoggato));

                JSON.parse(localStorage.getItem('user')!);
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });

    }
}
