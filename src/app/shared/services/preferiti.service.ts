import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PreferitiService {

    wishlistUrl = 'https://63c13294376b9b2e647577d8.mockapi.io/potion' + '/wishlist'
    url ='https://63c13294376b9b2e647577d8.mockapi.io/potion'
   wishList: any = [];
    productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

addWish(potionId: any) {
    return this.http.post(this.wishlistUrl, {id: potionId})
}

setWish( product: any) {
    this.wishList.push(...product);
    this.productList.next(product);
}

addToWishlist(product: any) {
    this.wishList.push(product);
    this.productList.next(this.wishList);
    console.log(this.wishList)

}

removeWish(product: any) {
    this.wishList.map((a:any, index: any) =>{
        if(product.id == a.id){
            this.wishList.splice(index,1)
        }
    })
}
}
