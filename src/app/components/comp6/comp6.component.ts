import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PotionService } from 'src/app/shared/services/potion.service';
import { UserLoggato } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CarrelloService } from 'src/app/shared/services/carrello.service';

@Component({
    selector: 'app-comp6',
    templateUrl: './comp6.component.html',
    styleUrls: ['./comp6.component.scss']
})
export class Comp6Component implements OnInit {

    potions: any;
    totalItem: number = 0;

    constructor(public srv: PotionService, private afAuth: AngularFireAuth, private cart: CarrelloService) { }

    ngOnInit(): void {
        this.srv.getPotion().subscribe((potion) => {
            this.potions = potion;
            //console.log(potion)

            //gestione del prezzo in base alla quantità
            this.potions.forEach((a: any) => {
                Object.assign(a, { quantity: 1, total: a.price });
            });
            //incremento degli elementi nel carrello
            this.cart.getProducts().subscribe(res => {
                this.totalItem = this.cart.getTotalQuantity();
            });
        });

        this.afAuth.authState.subscribe((user) => {
            console.log(user, 'prova local');
            if (user) {
                //sessione dell'utente loggato
                let nomeSessioneUser = user.uid;
                    let utenteLoggato = {} as UserLoggato;
                        utenteLoggato.displayName = (user.displayName !== null)?user?.displayName: '';
                        utenteLoggato.role = 'utente';
                        utenteLoggato.session = '/straniincontri';
                        utenteLoggato.uid = user.uid;
                        localStorage.removeItem(nomeSessioneUser);
                        localStorage.setItem(nomeSessioneUser, JSON.stringify(utenteLoggato));

                JSON.parse(localStorage.getItem('user')!);
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });

    }

    addToCart(potion: any) {
        this.cart.addToCart(potion);
    }

}
