import { Card } from "./card";

abstract class Player {
  abstract name: string;
  abstract hand: Card[];
  abstract status: string;

  abstract setStatus(status: string): void;

  public takeACard(card : Card): void{
    this.hand.push(card)
  };

//   public discardACard(index : number) : Card{

//   }

  public handAllOpen(): void {
    this.hand.map((card) => card.open());
  }

  public handAllClose(): void {
    this.hand.map((card) => card.close());
  }

  public getHandScoreInBlackJack(): number {
    let score = 0;
    let count = 0;
    for (let i = 0; i < this.hand.length; i++) {
      score += this.hand[i].getRankNumberInBlackJack();
      if (this.hand[i].rank === "A") count++;
    }
    while (score > 21 && count > 0) {
      score -= 10;
      count--;
    }
    return score;
  }
}

type HousePlayerStatus = "Waiting for bets" | "Waintng for action"

export class HousePlayer extends Player {
  public name = "House";
  public hand: Card[] = [];
  public status: HousePlayerStatus;

  constructor(status: HousePlayerStatus) {
    super();
    this.status = status;
  }

  public setStatus(status: string): void {}
}

type NonHousePlayerStatus =  "Waiting"
| "Betting"
| "Surrender"
| "Stand"
| "Hit"
| "Double"
| "Bust"
| "DoubleBust"

export class NonHousePlayer extends Player {
  public name: string;
  public chips = 400;
  public bet = 0;
  public hand: Card[] = [];
  public playerType : "user" | "ai"
  public status: NonHousePlayerStatus = "Betting"

  public nextPlayer: NonHousePlayer | null = null;
  public prevPlayer : NonHousePlayer | null = null;

  constructor(name: string,playerType : "user" | "ai") {
    super();
    this.name = name;
    this.playerType = playerType
  }

  public setName(name : string){
    this.name = name
  }

  public setBet(bet: number) {
    this.bet = bet;
  }

  public setStatus(status: string): void {}

  public makeRandomBet() {
    if (this.chips > 400) this.setBet(100);
    if (this.chips >= 300) this.setBet(50);
    if (this.chips >= 200) this.setBet(20);
    else this.setBet(5);
  }
};



// export class UserPlayer extends NonHousePlayer {
//   public setStatus(status: string): void {}
// }

// export class AIPlayer extends NonHousePlayer {
//   public setStatus(status: string): void {}

//   public makeRandomBet() {
//     if (this.chips > 400) this.setBet(100);
//     if (this.chips >= 300) this.setBet(50);
//     if (this.chips >= 200) this.setBet(20);
//     else this.setBet(5);
//   }
// }
