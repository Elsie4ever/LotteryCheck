import actionCreatorFactory from 'typescript-fsa'
import { LotteryTicketEntry } from './state';

export const LOTTERY_CHECK = 'LOTTERY_CHECK';
const actionCreator = actionCreatorFactory(LOTTERY_CHECK);

export const setLotteryTicketValueAction = actionCreator<LotteryTicketEntry>('SET_VALUE');
export const validateLotteryTicketValueAction = actionCreator<string | undefined>('VALIDATE_VALUE');

export interface CheckLotteryTicketValueActionParameters {
    entries: LotteryTicketEntry[];
}
export interface CheckLotteryTicketValueActionResult {
    prices: string[];
}
export const checkLotteryTicketValueAction = actionCreator.async<CheckLotteryTicketValueActionParameters, CheckLotteryTicketValueActionResult, any>('CHECK_TICKET');

export const initializeLotteryTicketValueAction = actionCreator.async<CheckLotteryTicketValueActionParameters, CheckLotteryTicketValueActionResult, any>('INITIALIZE_TICKET');