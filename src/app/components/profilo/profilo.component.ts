import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-profilo',
    templateUrl: './profilo.component.html',
    styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {
    constructor(public authService: AuthService) { }
    ngOnInit(): void { }
}
