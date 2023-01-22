export class Card {
  public rank:
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
    | "K"
    | "Joker";
  public suit: "H" | "D" | "S" | "C" | "Joker";
  public isOpen : boolean

  constructor(
    rank:
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
      | "K"
      | "Joker",
    suit: "H" | "D" | "S" | "C" | "Joker",isOpen : boolean
  ) {
    this.rank = rank;
    this.suit = suit;
    this.isOpen = isOpen
  }

  public getRankNumberInBlackJack(): number {
    if (this.rank === "J" || "Q" || "K") return 10;
    else if (this.rank === "A") return 11;
    else return parseInt(this.rank);
  };

  public open(){
    this.isOpen = true;
  };

  public close(){
    this.isOpen = false;
  }
}
