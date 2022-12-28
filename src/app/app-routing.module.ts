import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComeGiocareComponent } from './components/come-giocare/come-giocare.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { SudokuComponent } from './components/sudoku/sudoku.component';

import { PasswordDimenticataComponent } from './components/password-dimenticata/password-dimenticata.component';
import { VerificaMailComponent } from './components/verifica-mail/verifica-mail.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfiloComponent } from './components/profilo/profilo.component';

import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    //AUTENTICAZIONI//
    {
        path: "sign-in",
        component: SignInComponent
    },
    {
        path: "sign-up",
        component: SignUpComponent
    },
    {
        path: "passwordDimenticata",
        component: PasswordDimenticataComponent
    },
    {
        path: "verificaMail",
        component: VerificaMailComponent
    },
    {
        path: "profilo",
        component: ProfiloComponent
    },
    //guard
    {
        path: "",
        redirectTo: '/sign-in',
        pathMatch: 'full',
    },
    //percorso componenti
    {
        path: "inizio",
        component: Comp1Component
    },
    {
        path: "bussi",
        component: Comp2Component,
    },
    {
        path: "segui",
        component: Comp3Component,
    },
    {
        path: "comegiocare",
        component: ComeGiocareComponent
    },
    {
        path: "sudoku",
        component: SudokuComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
