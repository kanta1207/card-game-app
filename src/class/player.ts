import { Card } from "./card";

abstract class Player {
  abstract name: string;
  abstract hand: Card[];
  abstract status: string;

  abstract setStatus(status: string): void;

  public initializeHand(){
    this.hand = []
  }

  public takeACard(card: Card): void {
    this.hand.push(card);
  }

  //   public discardACard(index : number) : Card{

  //   }

  public handAllOpen(): void {
    this.hand.map((card) => card.open());
  }

  public handAllClose(): void {
    this.hand.map((card) => card.close());
  }
}



type HousePlayerStatus = "Waiting for bets" | "Waintng for action" | "Playing" | "Finished playing" | "Bust";

export class HousePlayer extends Player {
  // 「DEALER MUST DRAW TO 16 AND STAND ON ALL 17’S」
  public name = "House";
  public hand: Card[] = [];
  public status: HousePlayerStatus;

  constructor(status: HousePlayerStatus) {
    super();
    this.status = status;
  }


  public setStatus(status: HousePlayerStatus): void {
    this.status = status;
  }
}

type NonHousePlayerStatus =
  | "Waiting"
  | "Betting"
  | "Surrender"
  | "Stand"
  | "Hit"
  | "Double"
  | "Bust"
  | "DoubleBust"
  | "Win"
  | "Push"
  | "Lose"

export class NonHousePlayer extends Player {
  public name: string;
  public chips = 400;
  public bet = 0;
  public hand: Card[] = [];
  public playerType: "user" | "ai";
  public status: NonHousePlayerStatus = "Betting";

  public nextPlayer: NonHousePlayer | null = null;
  public prevPlayer: NonHousePlayer | null = null;

  constructor(name: string, playerType: "user" | "ai") {
    super();
    this.name = name;
    this.playerType = playerType;
  }

  public getPlayerType(): "user" | "ai" {
    return this.playerType;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setBet(bet: number) {
    this.bet = bet;
  }

  public getBet(): number {
    return this.bet;
  }

  public getChips = () : number => {
    return this.chips;
  };

  public setChips = (chips : number) : void => {
    this.chips = chips
  }

  public addChips = (money : number) : void=> {
    this.setChips(this.chips + money)
  }

  public substractChips = (money : number) : void => {
    const res = this.chips - money;
    res >= 0 ? this.setChips(res) : this.setChips(0);
  }
 
  public setStatus(status: NonHousePlayerStatus): void {
    this.status = status
  };

  public makeRandomBet() {
    if (this.chips > 400) this.setBet(100);
    if (this.chips >= 300) this.setBet(50);
    if (this.chips >= 200) this.setBet(20);
    else this.setBet(5);
  };
}

