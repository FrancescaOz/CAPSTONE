import { Component, OnInit } from '@angular/core';
import { SudokuBoard } from 'src/app/models/sudokuTabellone';
import { Cell } from 'src/app/models/cell';


@Component({
    selector: 'app-sudoku',
    templateUrl: './sudoku.component.html',
    styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent implements OnInit {
    board!: SudokuBoard
    activeNumber!: number;

    isDone = false;

    constructor() { }

    ngOnInit() {
        this.board = new SudokuBoard();
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

