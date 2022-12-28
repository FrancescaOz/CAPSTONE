import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
    selector: 'app-verifica-mail',
    templateUrl: './verifica-mail.component.html',
    styleUrls: ['./verifica-mail.component.scss']
})
export class VerificaMailComponent implements OnInit {
    constructor(
        public authService: AuthService
    ) { }
    ngOnInit() {
    }
}
