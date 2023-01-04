import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
constructor (public authService: AuthService) {}
    ngOnInit(): void {}

@ViewChild('form', {static:true}) form!:NgForm;

userForm:any = {
    nome: '',
    password:''
  }

}
