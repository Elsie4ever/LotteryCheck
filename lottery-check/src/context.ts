import * as React from 'react';
import { LotteryCheckState, getInitialLotteryCheckState } from './state';
import { CheckLotteryInterface, getCheckLotteryInterfaceNoop } from './interface'

export type LotteryCheckContextType = [LotteryCheckState, CheckLotteryInterface];
export const LotteryCheckContext = React.createContext<LotteryCheckContextType>([getInitialLotteryCheckState(), getCheckLotteryInterfaceNoop()]);