import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PotionService } from 'src/app/shared/services/potion.service';
import { UserLoggato } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
    selector: 'app-comp6',
    templateUrl: './comp6.component.html',
    styleUrls: ['./comp6.component.scss']
})
export class Comp6Component implements OnInit {

    potions: any;

    constructor(public srv: PotionService, private afAuth: AngularFireAuth) { }

    ngOnInit(): void {
        this.srv.getPotion().subscribe((potion) => {
            this.potions = potion;
            console.log(potion)
        })

        this.afAuth.authState.subscribe((user) => {
            if (user && user.displayName) {
                //sessione dell'utente loggato
                    let utenteLoggato = {} as UserLoggato;
                        utenteLoggato.displayName = user.displayName;
                        utenteLoggato.role = 'utente';
                        utenteLoggato.session = '/straniincontri';
                        localStorage.setItem('utenteLoggato', JSON.stringify(utenteLoggato));

                JSON.parse(localStorage.getItem('user')!);
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });

    }


}
