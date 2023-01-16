import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CarrelloService {

    cartItemList: any = [];
    productList = new BehaviorSubject<any>([]);

    constructor() { }

    getProducts() {
      return this.productList.asObservable();
    }

    setProduct( product: any) {
        this.cartItemList.push(...product);
        this.productList.next(product);
    }

    addToCart(product: any) {
        this.cartItemList.push(product);
        this.productList.next(this.cartItemList);
        this.getTotalPrice();
        console.log(this.cartItemList)
    }

    getTotalPrice():number {
        let Gtotal = 0;
        this.cartItemList.map((a: any) => {
            Gtotal += a.total;
        })
        return Gtotal;
    }

    removeCartItem(product: any) {
        this.cartItemList.map((a:any, index: any) =>{
            if(product.id == a.id){
                this.cartItemList.splice(index,1)
            }
        })
    }

    removeAllCart() {
        this.cartItemList = []
        this.productList.next(this.cartItemList);
    }
}
