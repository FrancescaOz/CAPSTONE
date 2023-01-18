import { Component, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/shared/services/carrello.service';

@Component({
    selector: 'app-calipso-shop',
    templateUrl: './calipso-shop.component.html',
    styleUrls: ['./calipso-shop.component.scss']
})
export class CalipsoShopComponent implements OnInit {

    public products: any = [];
    public Gtotal !: number;
    constructor(private cart: CarrelloService) { }

    ngOnInit(): void {
        this.cart.getProducts().subscribe(res => {
            this.products = res;
            this.Gtotal = this.cart.getTotalPrice();
        })
    }

    removeItem(item: any) {
        this.cart.removeCartItem(item);
        this.Gtotal = this.cart.getTotalPrice();
    }

    emptyCart(){
        this.cart.removeAllCart();
    }


}
