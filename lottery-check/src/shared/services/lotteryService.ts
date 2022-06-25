import axios from 'axios';
import { LotteryTicketEntry } from "../../state";

export interface CheckLotteryTicketParameters {
    ticketEntry: LotteryTicketEntry;
}
export const CheckLotteryTickets = async (params: CheckLotteryTicketParameters): Promise<string> => {
    const {ticketEntry} = params;
    const url = 'https://walottery.com/WinningNumbers/CheckYourTicket.aspx?gamename=powerball';
    const response =
      await axios.post(url);
    return response.data;
}