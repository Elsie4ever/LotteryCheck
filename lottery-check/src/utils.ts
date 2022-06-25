import { LotteryTicketEntry } from "./state";

export const generateTicketEntry = (lotteryBrand: string, inputNumber: number): LotteryTicketEntry => {
    const entryNumber = [];
    for( var i=0; entryNumber.push(0) < inputNumber;);
    return {
        lotteryBrand,
        entryNumber
    };
}

export const getWinPriceFromHTML = (htmlText: string): string => {
    return '';
}