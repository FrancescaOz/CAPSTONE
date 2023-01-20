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

    setProduct(product: any) {
        this.cartItemList.push(...product);
        this.productList.next(product);
    }

    addToCart(product: any) {
        if (this.cartItemList.indexOf(product) == -1) {
            this.cartItemList.push(product);
        } else {
            let editProduct = this.cartItemList.find((pr: any) => {
                return pr.name == product.name;
            })
            editProduct.quantity += 1;
        }
        this.productList.next(this.cartItemList);
        this.getTotalQuantity();
        this.getTotalPrice();
        console.log(this.cartItemList)
    }

    getTotalQuantity() {
        let quantityTotal = 0;
        this.cartItemList.map((q: any) => {
            quantityTotal += q.quantity;
        })
       return quantityTotal;
    }

    getTotalPrice(): number {
        let Gtotal = 0;
        this.cartItemList.map((a: any) => {
            Gtotal += a.total;
        })
        return Gtotal;
    }

    removeCartItem(product: any) {
        this.cartItemList.map((a: any, index: any) => {
            if (product.id == a.id) {
                this.cartItemList.splice(index, 1)
            }
        })
    }

    removeAllCart() {
        this.cartItemList = []
        this.productList.next(this.cartItemList);
    }
}
