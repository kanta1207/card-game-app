import { Deck } from './deck';
import { GameType } from './gameType';
import { Player } from './player';

export class Table  {
    public gameType : GameType;
    public deck : Deck;
    public player1 : Player;
    public player2 : Player;
    public player3 : Player;
    public player4 : Player;
    public gameLog = ""

    constructor(gameType : GameType,userName : string){
        this.gameType = gameType;
        this.deck = new Deck(gameType);
        this.player1 = new Player("AI1","ai",gameType);
        this.player2 = new Player(userName,"user",gameType);
        this.player3 = new Player("AI3","ai",gameType);
        this.player4 = gameType.isHouseIn ? new Player("House","house",gameType) : new Player("AI2","ai",gameType);
    };

    public makeAIBets = () => {
        this.player1.makeRandomBet();
        this.player3.makeRandomBet();
       if(!this.gameType.isHouseIn)this.player4.makeRandomBet();
    }

    public distributeCards(){
        //shuffle the deck first.
        this.deck.shuffleDeck();

        //initial number of cards for players , except for the house
        let initialHand = this.gameType.initialHand
        //distribute the initial cards to the players
        this.deck.drawCards(this.player1,initialHand);
        this.deck.drawCards(this.player2,initialHand);
        this.deck.drawCards(this.player3,initialHand);

        //check if player4 is house or not
        if(this.gameType.isHouseIn)initialHand = this.gameType.initialHouseHand;
        this.deck.drawCards(this.player4,initialHand)
    };
};