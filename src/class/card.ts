export class Card {
    public rank : string;
    public suit: string;

    constructor(rank : string,suit : string){
        this.rank = rank;
        this.suit = suit;
    };

    public getRankNumberInBlackJack() : number{
        if(this.rank === "J" || "Q" || "K")return 10;
        else if(this.rank === "A")return 11;
        else return parseInt(this.rank);
    };
};





