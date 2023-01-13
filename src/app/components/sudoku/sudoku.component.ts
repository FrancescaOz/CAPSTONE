import { Component, OnInit } from '@angular/core';
import { SudokuBoard } from 'src/app/models/sudokuTabellone';
import { Cell } from 'src/app/models/cell';
import { UserLoggato } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
    selector: 'app-sudoku',
    templateUrl: './sudoku.component.html',
    styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent implements OnInit {
    board!: SudokuBoard
    activeNumber!: number;

    isFavorite = false;
    isDone = false;

    constructor(private afAuth: AngularFireAuth) { }

    ngOnInit() {
        this.board = new SudokuBoard();
        this.afAuth.authState.subscribe((user) => {
            if (user && user.displayName) {
                //sessione dell'utente loggato
                    let utenteLoggato = {} as UserLoggato;
                        utenteLoggato.displayName = user.displayName;
                        utenteLoggato.role = 'utente';
                        utenteLoggato.session = '/sudoku';
                        localStorage.setItem('utenteLoggato', JSON.stringify(utenteLoggato));

                JSON.parse(localStorage.getItem('user')!);
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });
        while (this.board.isUndefined()) {
            this.board.initialize();
        }
    }

    reload() {
        this.board.initialize();
    }

    setActive(button: any, number: number): void {
        if (this.activeNumber == number) {
            this.activeNumber = -1;
        } else {
            this.activeNumber = number;
        }
    }

    //al cambio delle caselle
    onCellSelect(cell: Cell): void {
        if (this.activeNumber == -1 || cell.guess == this.activeNumber) {
            cell.makeGuess(undefined);
        } else {
            cell.makeGuess(this.activeNumber);
        }

        if (document.getElementsByClassName('incomplete').length == 1) {
            this.isDone = true;
        }
    }
}

