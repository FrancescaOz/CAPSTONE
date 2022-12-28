import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-password-dimenticata',
  templateUrl: './password-dimenticata.component.html',
  styleUrls: ['./password-dimenticata.component.scss']
})
export class PasswordDimenticataComponent implements OnInit {
    constructor(public authService: AuthService) { }
      ngOnInit() {
      }
}
