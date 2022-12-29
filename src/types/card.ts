class Card {
    public rank : string;
    public suit: string;

    constructor(rank : string,suit : string){
        this.rank = rank;
        this.suit = suit;
    };

    public printRankAndSuit() : string{
        return this.rank + this.suit
    };
};

class Deck {
    public static readonly SUITS = ["♠","♡","♢","♣"];
    public static readonly RANKS = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    public cards : Card[];

    constructor(){
        this.cards =  Deck.createDeck();
    };

    public static createDeck() : Card[]{
        const s = Deck.SUITS.length;
        const r = Deck.RANKS.length;
        
        const cards : Card[] =  [];

        for(let i = 0; i < s ; i++){
            for(let j = 0; j < r; j++){
                cards.push(new Card(Deck.SUITS[s],Deck.RANKS[r]))
            }
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
}