import { NonHousePlayer } from './player';

export class PlayerDeque {
    public head : NonHousePlayer | null = null;
    public tail : NonHousePlayer | null = null;

    static createPlayerDeque(playerList : NonHousePlayer[]) : PlayerDeque{
        const playerDeque = new PlayerDeque()
        for(let i = 0; i < playerList.length; i++)playerDeque.enqueueBack(playerList[i]);
        return playerDeque
    }

    peekFront() : NonHousePlayer | null{
        if(this.head == null) return null;
        return this.head;
    }

    peekBack() : NonHousePlayer | null{
        if(this.tail == null) return null;
        return this.tail;
    }

    enqueueFront(player : NonHousePlayer) : void{
        if(this.head == null){
            this.head = player;
            this.tail = this.head;
        }
        else {
            this.head.prevPlayer = player;
            this.head.prevPlayer.nextPlayer = this.head;
            this.head = this.head.prevPlayer;
        }
    }

    enqueueBack(player : NonHousePlayer) : void{
        if(this.tail == null){
            this.head = player;
            this.tail = this.head;
        }
        else{
            this.tail.nextPlayer = player;
            this.tail.nextPlayer.prevPlayer = this.tail;
            this.tail = this.tail.nextPlayer;
        }
    }

    dequeueFront() :NonHousePlayer | null{
        if(this.head == null) return null;

        let temp = this.head;
        this.head = this.head.nextPlayer;
        if(this.head == null) this.tail = null
        else this.head.prevPlayer = null;
        return temp;
    }

    dequeueBack() : NonHousePlayer | null{
        if(this.tail == null) return null;

        let temp = this.tail;
        this.tail = this.tail.prevPlayer;
        if(this.tail == null) this.head = null;
        else this.tail.nextPlayer = null;
        return temp;
    }
};

