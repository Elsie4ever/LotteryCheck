import { call, put } from "redux-saga/effects";
import { Action } from "typescript-fsa";
import { checkLotteryTicketValueAction, CheckLotteryTicketValueActionParameters } from "../action";
import { CheckLotteryTickets } from "../shared/services/lotteryService";
import { LotteryTicketEntry } from "../state";
import { getAuthToken } from "../webScrapper/authentication";

export function* checkLotteryValueSaga(action: Action<CheckLotteryTicketValueActionParameters>) {
    const {entries} = action.payload;
    let htmlTexts: string[] = [];
    try {
        for (const entry of entries) {
            const text:string = yield call(CheckLotteryTickets, {ticketEntry: entry});
            htmlTexts.push(text);
            getAuthToken('https://walottery.com/WinningNumbers/CheckYourTicket.aspx?gamename=powerball');
        }
        yield put(checkLotteryTicketValueAction.done({
            params: action.payload,
            result: {prices: htmlTexts}
        }));
    } catch (error) {
        yield put(checkLotteryTicketValueAction.failed({
            params: action.payload,
            error: error
        }));
    }
}
