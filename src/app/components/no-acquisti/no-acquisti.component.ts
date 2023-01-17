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
        //sessione dell'utente loggato
        this.afAuth.authState.subscribe((user) => {
            if (user && user.displayName) {

                let utenteLoggato = {} as UserLoggato;
                utenteLoggato.displayName = user.displayName;
                utenteLoggato.role = 'utente';
                utenteLoggato.session = '/ops';
                localStorage.setItem('utenteLoggato', JSON.stringify(utenteLoggato));

                JSON.parse(localStorage.getItem('user')!);
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });

    }
}
