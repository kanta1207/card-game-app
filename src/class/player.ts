import { Card } from "./card";
import { GameType } from "./gameType";

export class Player {
    public name : string;
    public type : "user" | "ai" | "house";
    public gameType : GameType;
    public chips : number;
    public bet : number;
    public hand : Card[] = []
    public status = ""


    constructor(name : string,type : "user" | "ai" | "house",gameType : GameType){
        this.name = name;
        this.type = type;
        this.gameType = gameType;
        this.chips = 400;
        this.bet = 0;
    };

    public setBet(bet : number){
        this.bet = bet;
    };


    public makeRandomBet(){
        if(this.chips > 400)this.setBet(100);
        if(this.chips >= 300)this.setBet(50);
        if(this.chips >= 200)this.setBet(20);
        else this.setBet(5);
    };

    public setStatus(status : string) : void{
        this.status = status;
    }

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