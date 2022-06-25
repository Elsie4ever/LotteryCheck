import { Action } from "typescript-fsa";
import { CheckLotteryInterface, getCheckLotteryInterface } from "../interface";
import { lotteryTicketReducer } from "../reducer";
import { getAllLotteryCheckSagas } from "../sagas";
import { useAsyncSagaReducer } from "../shared/hooks/useAsyncSagaReducer";
import { getInitialLotteryCheckState, LotteryCheckState } from "../state";

export const useLotteryCheck = (): [LotteryCheckState, CheckLotteryInterface] => {
    const [ state, dispatch ] = useAsyncSagaReducer<LotteryCheckState, Action<unknown>>(
        lotteryTicketReducer,
        getAllLotteryCheckSagas,
        getInitialLotteryCheckState()
    );

    const api = getCheckLotteryInterface({dispatch});

    return [state, api];
}