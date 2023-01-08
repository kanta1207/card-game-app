import { atom } from 'recoil';
export const gamePhaseAtom = atom<"betting" | "action" | "result">({
    key : "gamePhase",
    default : "betting"
})