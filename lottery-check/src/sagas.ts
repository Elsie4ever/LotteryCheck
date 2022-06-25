import { all, takeLatest } from 'redux-saga/effects'
import { checkLotteryTicketValueAction, initializeLotteryTicketValueAction, setLotteryTicketValueAction } from './action';
import { checkLotteryValueSaga } from './sagas/checkLotteryValueSaga';
import { initializeLotteryValueSaga } from './sagas/initializeLotteryValueSaga';

export function* getAllLotteryCheckSagas() {
    yield all ([
        takeLatest(initializeLotteryTicketValueAction.started, initializeLotteryValueSaga),
        takeLatest(checkLotteryTicketValueAction.started, checkLotteryValueSaga),
    ]);
}