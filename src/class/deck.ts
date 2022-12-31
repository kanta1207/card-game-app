import { Card } from "./card";

export class Deck {
    public static readonly SUITS = ["S","H","D","C"];
    public static readonly RANKS = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    public cards : Card[];
    public jokerNum : number

    constructor(jokerNum : number){
        this.cards =  Deck.createDeck(jokerNum);
        this.jokerNum = jokerNum;
    };

    public static createDeck(jokerNum : number) : Card[]{
        const s = Deck.SUITS.length;
        const r = Deck.RANKS.length;
        
        const cards : Card[] =  [];

        for(let i = 0; i < s ; i++){
            for(let j = 0; j < r; j++){
                cards.push(new Card(Deck.SUITS[s],Deck.RANKS[r]))
            }
        };

        for(let i = 0; i < jokerNum; i++){
            let joker = new Card("Joker","Joker")
            cards.push(joker);
        };

        return cards;
    };

    public shuffleDeck() : void {
        const deckSize = this.cards.length;

        for(let i = deckSize-1; i >= 0; i--){
           let randomIndex = Math.floor(Math.random() * (i + 1));//なぜi+1? i = deckSize - 1 の時５２になりかねなくね？
           
           let temp = this.cards[i];

           this.cards[i] = this.cards[randomIndex];
           this.cards[randomIndex] = temp;
        }
    }

    public drawOne(){
        return this.cards[0];
    };

    public resetDeck(){
        this.cards = Deck.createDeck(this.jokerNum);
    }
};

export class BlackJackDeck extends Deck{

}