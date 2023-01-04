import { Injectable, NgZone } from '@angular/core';
import { User, UserLoggato } from './user';
import *as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userData: any; //salva i dati dell'utente che ha effettuato l'accesso

    constructor(
        public afs: AngularFirestore, //ignetta il service Firestore
        public afAuth: AngularFireAuth, //ignetta l'auth service di Firebase
        public router: Router,
        public ngZone: NgZone
    ) {
        //impostazione del localstorage. Quando si è loggati  e quando si è disconnessi
        this.afAuth.authState.subscribe((user) => {
            if (user && user.displayName) {
                this.userData = user;
                //sessione dell'utente loggato
                localStorage.setItem('user', JSON.stringify(this.userData));
                    let utenteLoggato = {} as UserLoggato;
                        utenteLoggato.displayName = user.displayName;
                        utenteLoggato.role = 'utente';
                        utenteLoggato.session = '';
                        localStorage.setItem('utenteLoggato', JSON.stringify(utenteLoggato));

                JSON.parse(localStorage.getItem('user')!);
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });
    }

    //accedi email/password
    SignIn(email: string, password: string) {
        return this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
            this.SetUserData(result.user);
            this.afAuth.authState.subscribe((user) => {
                if (user) {
                    this.router.navigate(['profilo']);
                }
            });
        })
            .catch((error) => {
                window.alert('Si prega di compilare correttamente i campi');
            });
    }

    //registrati con email/password
    SignUp(email: string, password: string) {
        return this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
            this.SetUserData(result.user);
            this.router.navigate(['profilo']);
        })
            .catch((error) => {
                window.alert('Si prega di compilare correttamente i campi')
            })
    }

    //reset password

    passwordDimenticata(passwordResetEmail: string) {
        return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(() => {
            window.alert('password resettata completamente, controlla la tua e-mail')
        })
            .catch((error) => {
                window.alert('si è verificato un errore');
            });
    }

    //cambia in vero quando l'utente è loggato e la mail verificata
    get Loggato(): boolean {
        const user = JSON.parse(localStorage.getItem('user')!);
        return user !== null;
    }

    //login con account esterni

    GoogleAuth() {
        return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
            this.router.navigate(['profilo']);
        });
    }

    //logica per eseguire i provider di autenticazione

    AuthLogin(provider: any) {
        return this.afAuth.signInWithPopup(provider).then((result) => {
            this.router.navigate(['profilo']);
            this.SetUserData(result.user);
        })
            .catch((error) => {
                window.alert('si è verificato un errore');
            });
    }

    //Impostazione dati utente

    SetUserData(user: any) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
            `users/${user.uid}`
        );

        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            //emailVerified: user.emailVerified,
        };

        return userRef.set(userData, {
            merge: true,
        });
    }

    //logout

    LogOut() {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            localStorage.removeItem('utenteLoggato');
            this.router.navigate(['sign-in']);
        });
    }
}
