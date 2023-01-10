export class Quiz {
    category!: string;
    type!: string;
    difficulty!: string;
    question!: string;
    answers!: Answer[];
}

export class Answer {
    answer!:string;
    correctAnswer!: boolean;
}
