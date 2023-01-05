import { Card } from "./card";
import { GameType } from "./gameType";

export class Player {
    public name : string;
    public type : "user" | "ai" | "house";
    public gameType : GameType;
    public chips = 400;
    public hand : Card[] = []

    constructor(name : string,type : "user" | "ai" | "house",gameType : GameType){
        this.name = name;
        this.type = type;
        this.gameType = gameType;
    };

    public getHandScoreInBlackJack() : number{
        let score = 0;
        let count = 0;
        for(let i = 0; i < this.hand.length; i++){
            score += this.hand[i].getRankNumberInBlackJack()
            if(this.hand[i].rank === "A")count++
        }

        while(score > 21 && count > 0){
            score -= 10;
            count--
        };
        return score
    };
}