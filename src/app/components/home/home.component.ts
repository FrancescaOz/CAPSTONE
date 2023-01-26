import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoggato } from 'src/app/shared/services/user';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(private router: Router, public srv: AuthService) { }


    ngOnInit(): void {
        console.log(this.srv.user, 'dimmi utente');
    }

    controllaSessione() {
        console.log(this.srv.user, 'prova user')
        //se l'utente è loggato
        if (this.srv.user !== undefined) {
            let utente = JSON.parse(localStorage.getItem(this.srv.user.uid)!);
            //l'utente loggato ha già iniziato a giocare?
            console.log(utente, 'utente if');
           if (utente.session !== '') {
                let url = utente.session;
                this.router.navigate([url]);

            } else {
                alert('attenzione, non hai ancora iniziato la tua avventura');
            }
        }
    }
}
