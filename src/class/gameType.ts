export type GameType = {
  gameName: string;
  gameDescriptionUrl: string;
  pagePath: string;
  playerNum: number;
  isCardOpen: boolean; // if the cards is open in the first place
  jokerNum: number;
  initialHand: number;
  initialHouseHand: number;
};

export const gameTypeBlackJack: GameType = {
  gameName: "Black jack",
  gameDescriptionUrl:
    "https://en.wikipedia.org/wiki/Blackjack#Rules_of_play_at_casinos",
  pagePath: "blackJack",
  playerNum: 3,
  isCardOpen: true,
  jokerNum: 0,
  initialHand: 2,
  initialHouseHand: 1,
};

export const gameTypeArray: GameType[] = [gameTypeBlackJack];
