import { PlayerDeque } from "./playerDeque";
import { Deck } from "./deck";
import { GameType, gameTypeBlackJack } from "./gameType";
import { HousePlayer, NonHousePlayer } from "./player";

abstract class Table {
  abstract gameType: GameType;
  abstract deck: Deck;
  abstract playerDeque: PlayerDeque;
  abstract userPlayer: NonHousePlayer;
  abstract house: HousePlayer | null;
  public gameLog: string = "";

  public setUserName(name: string | null): void {
    if (name !== null) this.userPlayer.setName(name);
  }
  //method to distribute cards to non-house player in the begining of the game.
  public distributeCardsToPlayers(): void {
    let initialHand = this.gameType.initialHand;
    let player = this.playerDeque.head;

    while (player !== null) {
      this.drawCards(player, initialHand);
      player = player.nextPlayer;
    }
  }
  //method to distribute cards to the house player in the begining of the game.
  public distributeCardsToHouse(): void {
    let initialHand = this.gameType.initialHouseHand;
    this.house !== null
      ? this.drawCards(this.house, initialHand)
      : console.error(
          "You cannot distribute cards to house because this game doesn't include house."
        );
  }

  //method to add specific number of cards to player`s hand
  public drawCards(player: NonHousePlayer | HousePlayer, num: number): void {
    for (let i = 0; i < num; i++) {
      const card = this.deck.drawOne();
      if (card !== undefined) player.takeACard(card);
    }
  }

  public makeAIBets(): void {
    let player = this.playerDeque.head;
    while (player !== null) {
      if (player.playerType === "ai") player.makeRandomBet();
      player = player.nextPlayer;
    }
  }
}

export class BlackJackTable extends Table {
  public gameType = gameTypeBlackJack;
  public deck: Deck = new Deck(this.gameType);
  public house: HousePlayer = new HousePlayer("Waintng for action");
  public aiPlayer1: NonHousePlayer = new NonHousePlayer("AI1", "ai");
  public aiPlayer2: NonHousePlayer = new NonHousePlayer("AI2", "ai");
  public userPlayer: NonHousePlayer = new NonHousePlayer("User", "user");
  public playerDeque: PlayerDeque = new PlayerDeque();

  constructor() {
    super();
    this.deck = new Deck(this.gameType);
    this.playerDeque.enqueueBack(this.aiPlayer1);
    this.playerDeque.enqueueBack(this.userPlayer);
    this.playerDeque.enqueueBack(this.aiPlayer2);
    this.deck.shuffleDeck();
    this.distributeCardsToPlayers();
    this.distributeCardsToHouse();
  }
}
