import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
//componenti//
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComeGiocareComponent } from './components/come-giocare/come-giocare.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { QuizComponent } from './components/quiz/quiz.component';


//autenticazione//
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PasswordDimenticataComponent } from './components/password-dimenticata/password-dimenticata.component';
import { VerificaMailComponent } from './components/verifica-mail/verifica-mail.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from './environments/environments';

//auth service

import { AuthService } from './shared/services/auth.service';
import { Comp4Component } from './components/comp4/comp4.component';

import {HttpClientModule} from '@angular/common/http';
import { Comp5Component } from './components/comp5/comp5.component';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        FooterComponent,
        ComeGiocareComponent,
        Comp1Component,
        Comp2Component,
        Comp3Component,
        SudokuComponent,
        PasswordDimenticataComponent,
        VerificaMailComponent,
        SignInComponent,
        SignUpComponent,
        ProfiloComponent,
        Comp4Component,
        QuizComponent,
        Comp5Component,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        //firebase
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule
    ],
    providers: [ AuthService ],
    bootstrap: [AppComponent]
})
export class AppModule { }


