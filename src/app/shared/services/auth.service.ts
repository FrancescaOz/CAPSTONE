import { Injectable, NgZone } from '@angular/core';
import { User, UserLoggato } from './user';
import *as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';

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
            console.log('utente', user)
            if (user && user.displayName) {
                this.userData = user;
                //sessione dell'utente loggato
                let nomeSessioneUser = user.uid;
                localStorage.setItem('user', JSON.stringify(this.userData));
                let utenteLoggato = {} as UserLoggato;
                utenteLoggato.displayName = user.displayName;
                utenteLoggato.role = 'utente';
                utenteLoggato.session = '';
                utenteLoggato.uid = user.uid;
                //localStorage.setItem(nomeSessioneUser, JSON.stringify(utenteLoggato));

                JSON.parse(localStorage.getItem('user')!);
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });
    }

    //accedi email/password
    user!: any;

    SignIn(email: string, password: string) {
        return this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
            this.SetUserData(result.user);
            this.afAuth.authState.subscribe((user) => {
                console.log(user);
                if (user?.uid) {
                    let nomeSessioneUser = user.uid;
                    localStorage.setItem('user', JSON.stringify(user));
                    let utenteLoggato = {} as UserLoggato;
                    utenteLoggato.displayName = 'User';
                    utenteLoggato.role = 'utente';
                    utenteLoggato.session = '';
                    utenteLoggato.uid = user.uid;
                    //localStorage.setItem(nomeSessioneUser, JSON.stringify(utenteLoggato));
                    this.user = user;
                    //console.log(user.uid, 'vedere utente');
                    if (this.user !== undefined) {
                      this.router.navigate(['profilo']);
                    } else {
                        alert('attendi un istante');
                        this.router.navigate(['profilo']);
                    }


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
            this.SendVerificationMail();
            //console.log(email, password);
            this.SetUserData(result.user);
            //this.router.navigate(['sign-in']);
        })
            .catch((error) => {
                window.alert('Si prega di compilare correttamente i campi')
            })
    }

    SendVerificationMail() {
        return this.afAuth.currentUser
            .then((u: any) => u.sendEmailVerification())
            .then(() => {
                this.router.navigate(['verificaMail']);
            });
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
            emailVerified: user.emailVerified,
        };

        if (user?.uid) {
            this.user = user;
        }
        return userRef.set(userData, {
            merge: true,
        });
    }

    //logout

    LogOut() {
        return this.afAuth.signOut().then(() => {
            //rimuovo utente
            localStorage.removeItem('user');
            //rindirizzo
            this.router.navigate(['sign-in']);
        });
    }

}
