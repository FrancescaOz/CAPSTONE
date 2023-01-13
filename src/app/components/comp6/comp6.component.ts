import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PotionService } from 'src/app/shared/services/potion.service';

@Component({
    selector: 'app-comp6',
    templateUrl: './comp6.component.html',
    styleUrls: ['./comp6.component.scss']
})
export class Comp6Component implements OnInit {

    potions: any;

    constructor(public srv: PotionService) { }

    ngOnInit(): void {
        this.srv.getPotion().subscribe((potion) => {
            this.potions = potion;
            console.log(potion)
        })

    }




}
