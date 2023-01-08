import { atom } from "recoil";
import { Table } from "../../class/table";

export const tableAtom = atom<Table>({
    key : "table",
    default : undefined,
});
