export type SectionMode = 'unitialized' | 'fetching' | 'fetchingFailed' | 'deleting' | 'idle';

export interface LotteryTicketEntry {
    lotteryBrand: string;
    entryNumber: number[];
    date?: Date;
    winningAmount?: number;
}

export interface LotteryCheckState {
    lotteryTicketEntries: LotteryTicketEntry[];
    sectionMode: SectionMode;
    ticketValidation?: string;
}

export const getInitialLotteryCheckState = (): LotteryCheckState => {
    return {
        lotteryTicketEntries: [],
        sectionMode: 'unitialized'
    };
}