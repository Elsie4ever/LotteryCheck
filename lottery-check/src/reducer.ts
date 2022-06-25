import { reducerWithoutInitialState } from 'typescript-fsa-reducers'
import { checkLotteryTicketValueAction, CheckLotteryTicketValueActionParameters, CheckLotteryTicketValueActionResult, initializeLotteryTicketValueAction, setLotteryTicketValueAction, validateLotteryTicketValueAction } from './action'
import { LotteryCheckState, LotteryTicketEntry } from './state'

export const lotteryTicketReducer = reducerWithoutInitialState<LotteryCheckState>()
    .case(setLotteryTicketValueAction, (state: LotteryCheckState, payload: LotteryTicketEntry) => {
        const updatedState = {...state};
        updatedState.lotteryTicketEntries.push(payload);

        return updatedState;
    })
    .case(checkLotteryTicketValueAction.started, (state: LotteryCheckState, payload: CheckLotteryTicketValueActionParameters) => {
        const updatedState = {...state};
        updatedState.sectionMode = 'fetching';

        return updatedState;
    })
    .case(checkLotteryTicketValueAction.done, (state: LotteryCheckState, payload: {result: CheckLotteryTicketValueActionResult}) => {
        const updatedState = {...state};
        updatedState.sectionMode = 'idle';
        const index = 0;
        for(const price of payload.result.prices) {
            updatedState.lotteryTicketEntries[index].winningAmount = parseInt(price, 10);
        }
        return updatedState;
    })
    .case(checkLotteryTicketValueAction.failed, (state: LotteryCheckState) => {
        const updatedState = {...state};
        updatedState.sectionMode = 'idle'; // TODO: notify via toast

        return updatedState;
    })
    .case(validateLotteryTicketValueAction, (state: LotteryCheckState, payload?: string) => {
        const updatedState = {...state};
        // TODO: update this place holder logic
        updatedState.ticketValidation = payload;

        return updatedState;
    })
    .case(initializeLotteryTicketValueAction.started, (state: LotteryCheckState, payload: CheckLotteryTicketValueActionParameters) => {
        const updatedState = {...state};
        updatedState.sectionMode = 'fetching';

        return updatedState;
    })
    .case(initializeLotteryTicketValueAction.done, (state: LotteryCheckState, payload: {result: CheckLotteryTicketValueActionResult}) => {
        const updatedState = {...state};
        updatedState.sectionMode = 'idle';
        const index = 0;
        for(const price of payload.result.prices) {
            updatedState.lotteryTicketEntries[index].winningAmount = parseInt(price, 10);
        }
        return updatedState;
    })
    .case(initializeLotteryTicketValueAction.failed, (state: LotteryCheckState) => {
        const updatedState = {...state};
        updatedState.sectionMode = 'idle'; // TODO: notify via toast

        return updatedState;
    });