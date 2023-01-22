export type GameType = {
  gameNameEn: string;
  gameDescriptionUrlEn: string;
  gameNameJa: string;
  gameDescriptionUrlJa: string;
  pagePath: string;
  playerNum : number;
  isCardOpen : boolean; // if the cards is open in the first place
  jokerNum: number;
  initialHand : number;
  initialHouseHand : number;
};

export const gameTypeBlackJack : GameType = {
  gameNameEn: "Black jack",
  gameDescriptionUrlEn:
    "https://en.wikipedia.org/wiki/Blackjack#Rules_of_play_at_casinos",
  gameNameJa: "ブラックジャック",
  gameDescriptionUrlJa:
    "https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B8%E3%83%A3%E3%83%83%E3%82%AF#%E9%81%8A%E3%81%B3%E6%96%B9",
  pagePath: "blackJack",
  playerNum : 3,
  isCardOpen : true,
  jokerNum: 0,
  initialHand : 2,
  initialHouseHand : 1,
} 

export const gameTypeArray: GameType[] = [
  gameTypeBlackJack,
];

