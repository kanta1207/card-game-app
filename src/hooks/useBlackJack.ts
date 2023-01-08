import { useCallback, useState } from 'react';
export const useBlackJack = () => {
    const [userStatus,setUserStatus] = useState<"Waiting for AI1 to make a bet">("Waiting for AI1 to make a bet");

    const ai1MakeABet = useCallback(()=>{
        
    },[])

    return {userStatus}
}