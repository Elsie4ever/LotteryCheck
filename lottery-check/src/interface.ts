import { Action } from "typescript-fsa";
import { checkLotteryTicketValueAction, initializeLotteryTicketValueAction, setLotteryTicketValueAction, validateLotteryTicketValueAction } from "./action";
import { LotteryTicketEntry } from "./state";

export interface CheckLotteryInterface {
    initialize(entries: LotteryTicketEntry[]): void;
    setLotteryEntry(entry: LotteryTicketEntry): void;
    checkLotteryEntryPrices(entries: LotteryTicketEntry[]): void;
    validate(value?: string): void;
}

export const getCheckLotteryInterfaceNoop = (): CheckLotteryInterface => ({
    initialize: () => undefined,
    setLotteryEntry: () => undefined,
    checkLotteryEntryPrices: () => undefined,
    validate: () => undefined
});

export interface getCheckLotteryInterfaceParameters {
    dispatch(action: Action<unknown>): void;
}
export const getCheckLotteryInterface = (params: getCheckLotteryInterfaceParameters): CheckLotteryInterface => {
    const {dispatch} = params;
    return {
        initialize: (entries: LotteryTicketEntry[]) => dispatch(initializeLotteryTicketValueAction.started({entries})),
        setLotteryEntry: (entry: LotteryTicketEntry) => dispatch(setLotteryTicketValueAction(entry)),
        checkLotteryEntryPrices: (entries: LotteryTicketEntry[]) => dispatch(checkLotteryTicketValueAction.started({entries})),
        validate: (value?: string) => dispatch(validateLotteryTicketValueAction(value)),
    };
};