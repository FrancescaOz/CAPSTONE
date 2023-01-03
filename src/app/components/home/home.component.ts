import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoggato } from 'src/app/shared/services/user';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor (private router: Router ) {}

    controllaSessione() {
        let utente = JSON.parse(localStorage.getItem('utenteLoggato')!);
//sessione continua
        if (utente.session !== '') {
            let url = utente.session;
           this.router.navigate([url]);
        }
    }
}
