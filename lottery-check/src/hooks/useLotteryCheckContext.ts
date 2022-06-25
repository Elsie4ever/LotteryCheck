import * as React from 'react';
import { LotteryCheckContextType, LotteryCheckContext } from '../context';

export const useLotteryCheckContext = () => React.useContext<LotteryCheckContextType>(LotteryCheckContext);
