import { Card } from "./card";
import { GameType } from "./gameType";

export class Deck {
  public static readonly SUITS = ["S", "H", "D", "C"];
  public static readonly RANKS = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  public cards: Card[];
  public gameType: GameType;

  constructor(gameType: GameType) {
    this.cards = Deck.createDeck(gameType);
    this.gameType = gameType;
  }

  public static createDeck(gameType: GameType): Card[] {
    const s = Deck.SUITS.length;
    const r = Deck.RANKS.length;

    const deck: Card[] = [];

    for (let i = 0; i < s; i++) {
      for (let j = 0; j < r; j++) {
        deck.push(
          new Card(
            Deck.RANKS[j] as
              | "A"
              | "2"
              | "3"
              | "4"
              | "5"
              | "6"
              | "7"
              | "8"
              | "9"
              | "10"
              | "J"
              | "Q"
              | "K",
            Deck.SUITS[i] as "H" | "D" | "S" | "C",gameType.isCardOpen
          )
        );
      }
    }

    //add jokers if they`re needed
    for (let i = 0; i < gameType.jokerNum; i++) {
      let joker = new Card("Joker", "Joker",gameType.isCardOpen);
      deck.push(joker);
    };



    return deck;
  }

  public shuffleDeck(): void {
    const deckSize = this.cards.length;

    for (let i = deckSize - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1)); //なぜi+1? i = deckSize - 1 の時５２になりかねなくね？

      let temp = this.cards[i];

      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = temp;
    }
  }

  public drawOne(): Card | undefined {
    if (this.cards[0] === undefined) {
      alert("There aren`t any more cards.");
      return;
    }
    return this.cards.pop();
  }


  public resetDeck() {
    this.cards = Deck.createDeck(this.gameType);
  }
}

export class BlackJackDeck extends Deck {}
