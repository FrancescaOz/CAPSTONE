import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
constructor (public authService: AuthService) {}
    ngOnInit() {

    }

    @ViewChild('form', {static:true}) form!:NgForm;

    userForm:any = {
        email: '',
        password:''
      }
}
