import { createContext } from "react";

export const AccountDataContext = createContext({
    accountData: false, // false or {token: str, isPlayer: bool}
    setAccountData: () => {},
});
