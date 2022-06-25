import { call, put } from "redux-saga/effects";
import { Action } from "typescript-fsa";
import { checkLotteryTicketValueAction, CheckLotteryTicketValueActionParameters, initializeLotteryTicketValueAction } from "../action";
import { CheckLotteryTickets } from "../shared/services/lotteryService";
import { LotteryTicketEntry } from "../state";

//TODO: update
export function* initializeLotteryValueSaga(action: Action<CheckLotteryTicketValueActionParameters>) {
    const {entries} = action.payload;
    let htmlTexts: string[] = [];
    try {
        yield put(initializeLotteryTicketValueAction.done({
            params: action.payload,
            result: {prices: []}
        }));
    } catch (error) {
        yield put(initializeLotteryTicketValueAction.failed({
            params: action.payload,
            error: error
        }));
    }
}
