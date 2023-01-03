import { Component, OnInit } from '@angular/core';
import { UserLoggato } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {
    constructor(private afAuth: AngularFireAuth) { }

    ngOnInit(): void {
        this.afAuth.authState.subscribe((user) => {
            if (user && user.displayName) {
                //sessione dell'utente loggato
                    let utenteLoggato = {} as UserLoggato;
                        utenteLoggato.displayName = user.displayName;
                        utenteLoggato.role = 'utente';
                        utenteLoggato.session = '/segui';
                        localStorage.setItem('utenteLoggato', JSON.stringify(utenteLoggato));

                JSON.parse(localStorage.getItem('user')!);
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });

    }
}
