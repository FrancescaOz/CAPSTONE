import { Component } from '@angular/core';



@Component({
    selector: 'app-comp5',
    templateUrl: './comp5.component.html',
    styleUrls: ['./comp5.component.scss']
})
export class Comp5Component {

    ngOnInit() {
      this.hideAnimatedDiv()
    }

    hideAnimatedDiv() {
        let animatedDiv = document.getElementById('animazione');
        animatedDiv!.style.display = 'none';
        setTimeout(() => {
          animatedDiv!.style.display = 'block';
        }, 10000);
    }



}
