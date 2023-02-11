import { PlayerDeque } from "./playerDeque";
import { Deck } from "./deck";
import { GameType, gameTypeBlackJack } from "./gameType";
import { HousePlayer, NonHousePlayer } from "./player";
import { Card } from "./card";

abstract class Table {
  abstract gameType: GameType;
  abstract deck: Deck;
  abstract userPlayer: NonHousePlayer;
  abstract house: HousePlayer | null;
  abstract playerList : NonHousePlayer[]
  abstract playerDeque: PlayerDeque;
  abstract currentPlayer: NonHousePlayer | null;
  abstract playerAction: (player: NonHousePlayer) => void;
  abstract getHandScore: (player: HousePlayer | NonHousePlayer) => number;

  public gameLog: string = "";

  public setUserName(name: string | null): void {
    if (name !== null) this.userPlayer.setName(name);
  }

  //set a player in a turn to play
  public setCurrentPlayer(player: NonHousePlayer | null) {
    this.currentPlayer = player;
  }

  public getPlayerDeque(): PlayerDeque {
    return this.playerDeque;
  }

  public getPlayerDequeHead(): NonHousePlayer | null {
    return this.playerDeque.peekFront();
  }

  public getPlayerDequeTail(): NonHousePlayer | null {
    return this.playerDeque.peekBack();
  }

  public dequeuePlayer = (player: NonHousePlayer) => {
    console.log(this.playerDeque);
    if (player === this.getPlayerDequeHead()) this.playerDeque.dequeueFront();
    else if (player === this.getPlayerDequeTail())
      this.playerDeque.dequeueBack();
    else {
      // "player" is neigher head nor tail of the player deque,so it's certainly not null
      let prevPlayer = player.prevPlayer as NonHousePlayer;
      let nextPlayer = player.nextPlayer as NonHousePlayer;

      prevPlayer.nextPlayer = player.nextPlayer;
      nextPlayer.prevPlayer = player.prevPlayer;
    }
  };

  // a method to create a list of nonHousePlayer from playerDeque.
  public playerDequeToList(): NonHousePlayer[] {
    let playerList: NonHousePlayer[] = [];
    let player = this.playerDeque.head;
    while (player !== null) {
      playerList.push(player);
      player = player.nextPlayer;
    }
    return playerList;
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
  public house: HousePlayer = new HousePlayer("Waintng for player's action");
  public aiPlayer1: NonHousePlayer = new NonHousePlayer("Harry", "ai");
  public aiPlayer2: NonHousePlayer = new NonHousePlayer("Ronald", "ai");
  public userPlayer: NonHousePlayer = new NonHousePlayer("User", "user");
  public currentPlayer: NonHousePlayer | null = null;
  public playerList : NonHousePlayer[] = [this.aiPlayer1,this.userPlayer,this.aiPlayer2];
  public playerDeque: PlayerDeque = PlayerDeque.createPlayerDeque(this.playerList)

  constructor() {
    super();
    this.setNewGameReady();
  }

  public setNewGameReady(): void {
    this.deck.shuffleDeck();
    this.distributeCardsToPlayers();
    this.distributeCardsToHouse();
    this.setCurrentPlayer(this.playerDeque.head);
  }

  public playerAction = (player: NonHousePlayer): void => {
    const currentScore = this.getHandScore(player);
    const houseHand = this.getHandScore(this.house);
    if (currentScore >= 17) player.setStatus("Stand");
    else if (currentScore >= 13 && houseHand <= 6) player.setStatus("Stand");
    else this.actionHit(player);
  };

  public playerInitialAction = (player: NonHousePlayer): void => {
    const currentScore = this.getHandScore(player);
    if (currentScore === 11 || currentScore === 10) this.actionDouble(player);
    else this.playerAction(player);
  };

  public actionDouble = (player: NonHousePlayer): void => {
    const card = this.deck.drawOne();
    player.takeACard(card as Card);
    this.getHandScore(player) > 21
      ? player.setStatus("DoubleBust")
      : player.setStatus("Double");
  };

  public actionHit = (player: NonHousePlayer): void => {
    const card = this.deck.drawOne();
    if (card !== undefined) {
      player.takeACard(card);
      this.getHandScore(player) > 21
        ? player.setStatus("Bust")
        : player.setStatus("Hit");
    } else player.setStatus("Stand");
  };

  public houseAction = (): void => {
    const currentScore = this.getHandScore(this.house);
    const card = this.deck.drawOne();
    console.log(card);
    if (currentScore > 16 || card === undefined) return;
    else {
      setTimeout(() => {
        this.house.takeACard(card);
        return this.houseAction();
      }, 3000);
    }
  };

  public getHandScore = (player: NonHousePlayer | HousePlayer): number => {
    let score = 0;
    let count = 0;

    for (let i = 0; i < player.hand.length; i++) {
      score += player.hand[i].getRankNumberInBlackJack();
      if (player.hand[i].rank === "A") count++;
    }
    while (score > 21 && count > 0) {
      score -= 10;
      count--;
    }
    return score;
  };

  public isBlackJack = (player: NonHousePlayer | HousePlayer): boolean => {
    return player.hand.length === 2 && this.getHandScore(player) === 21;
  };

  public allPlayerGameDecision = (): void => {
   for(let i = 0; i < this.playerList.length; i++)this.gameDecision(this.playerList[i])
  };

  // decide if the player won or lost the game
  public gameDecision = (player: NonHousePlayer): void => {
    if (player.getChips() <= 0) return;
    const playerStatus = player.status;
    const houseStatus = this.house.status;
    const playerBet = player.getBet();

    if (playerStatus === "Bust" || playerStatus === "DoubleBust") {
      if (houseStatus === "Bust") player.setStatus("Push");
      else {
        playerStatus === "Bust"
          ? player.substractChips(playerBet)
          : player.substractChips(playerBet * 2);
        player.setStatus("Lose");
      }
    } else {
      const houseScore = this.getHandScore(this.house);
      const playerScore = this.getHandScore(player);
      if (houseStatus === "Bust" || houseScore < playerScore) {
        const addAmount = this.isBlackJack(player)
          ? playerBet * 1.5
          : playerStatus === "Double"
          ? playerBet * 2
          : playerBet;
        player.addChips(addAmount);
        player.setStatus("Win");
      } else if (this.isBlackJack(this.house) || playerScore < houseScore) {
        if (this.isBlackJack(player)) player.setStatus("Push");
        else {
          const substractAmount =
            playerStatus === "Double" ? playerBet * 2 : playerBet;
          player.substractChips(substractAmount);
          player.setStatus("Lose");
        }
      }
    }
  };

  public playerPrepareForNextGame(player: NonHousePlayer) {
    player.setStatus("Betting");
    player.initializeHand();

  }

  public prepareNextGame(): void {
    for(let i = 0; i < this.playerList.length; i++){
      this.playerPrepareForNextGame(this.playerList[i])
    }
    this.deck = new Deck(this.gameType);
    this.playerDeque = PlayerDeque.createPlayerDeque(this.playerList)
    this.house = new HousePlayer("Waiting for bets");
    this.setNewGameReady();
  }
}
